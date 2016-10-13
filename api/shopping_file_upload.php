<?php
	if ( $_FILES['pic']['error'] > 0 ) {
        echo json_encode(Array("success" => false, "fileName" => "null"));

	} else {

		if ( file_exists( "uploadImgs/" . $_FILES["pic"]["name"] ) ) {
            echo json_encode(Array("success" => false, "fileName" => "null"));
		} else {
			$picName = microtime( "now" ) . strstr( $_FILES["pic"]["name"], '.' );
			move_uploaded_file( $_FILES["pic"]["tmp_name"], "uploadImgs/" . $picName );
            echo json_encode(Array("success" => true, "fileName" => $picName));
		}
	}
?>
