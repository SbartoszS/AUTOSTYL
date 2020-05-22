<?php
header('Content-Type: application/json;charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] === 'POST') {

	$inputJSON = file_get_contents('php://input');

	if(isset($inputJSON)){
		$data = json_decode($inputJSON, true);
	
		if(
			array_key_exists("email", $data) && 
			array_key_exists("name", $data) && 
			array_key_exists("message", $data)
		) {
			
			$errors = array();
			if(!isEmail($data['email'])){
				$errors['email'] = "Nieprawidowy format email.";
			}

			if(!isMessage($data['message'])){
				$errors['message'] = "Nieprawidowy format Wiadomosci.";	
			}

			if(!isName($data['name'])){
				$errors['name'] = "Nieprawidowy format Imie i Nazwisko.";	
			}

			if(count($errors) === 0){
               $to = 'biuro@auto-styl.eu';
               $subject = $data['name'] ." Email: ".$data['email'] ;
               $message = $data['message'];
			   if(mail($to, $subject, $message)) {
				  header('Status: 200');
    			  exit(json_encode(array("success"=>"Email wyslany poprawnie.")));
			    }else{
    		     header('Status: 400');
    			 exit(json_encode(array("error"=>"Nie udalo sie wyslac wiadomosci.")));   
			    }				
			}else{
                header('Status: 404');
				exit(json_encode(array("error" => $errors)));	
			}

		} else {
			header('Status: 404');
			exit;
		}

	}else{
		http_response_code(404);
		exit;
	}
}


function isMessage($message)
{
	return !preg_match('/[<>{}]/i', $message);
}

function isEmail($email)
{
	return !empty($email) && preg_match('/^[a-z\p{L}0-9!#$%&\'*+\/=?^`{}|~_-]+[.a-z\p{L}0-9!#$%&\'*+\/=?^`{}|~_-]*@[a-z\p{L}0-9]+(?:[.]?[_a-z\p{L}0-9-])*\.[a-z\p{L}0-9]+$/ui', $email);
}

function isName($name)
{
	return preg_match('/^[^0-9!<>,;?=+()@#"°{}_$%:]*$/u', stripslashes($name));
}

header('Location: ../');
exit;
