<?php
    require_once('MysqliDb.php');

    $host = $_SERVER['HTTP_HOST'];
    
    /*测试环境*/
    if (strpos($host, 'localhost') > -1) {
        $param = Array (
            'host' => 'localhost',
            'username' => 'root', 
            'password' => '',
            // 'db'=> 'shopping',
            'db'=> 'test',
            'port' => 3306,
            /*'prefix' => 'my_',*/
            'charset' => 'utf8'
        );
    } else {
        $param = Array (
            'host' => 'sqld.duapp.com',
            'username' => '8ce3dd710dd1eca3f3ac3299b3f5446c23',
            'password' => 'F7a49d05812dff3df12339f0f0067c438d',
            'db'=> 'QpOWISEDlebkobwseEJiLS',
            'port' => 4550,
            'charset' => 'utf8'
        );
    }

    $db = new MysqliDb($param);
?>