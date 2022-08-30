package com.project.Netflix;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

<<<<<<< HEAD
@ComponentScan(basePackages = {"userChat.*","user.*","classification.*", "pick.*", "watch.*"})
=======
@ComponentScan(basePackages = {"userChat.*","user.*","classification.*", "pick.*", "likes.*"})
>>>>>>> b9cef09520b583ce022be454aea1bce6a02ab937
@SpringBootApplication
public class NetflixApplication {

	public static void main(String[] args) {
		SpringApplication.run(NetflixApplication.class, args);
	}

}
