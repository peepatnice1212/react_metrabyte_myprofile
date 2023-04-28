package com.example.demo

import org.springframework.boot.autoconfigure.SpringBootApplication
import org.springframework.boot.runApplication
import org.springframework.jdbc.core.JdbcTemplate
import org.springframework.web.bind.annotation.CrossOrigin
import org.springframework.web.bind.annotation.GetMapping
import org.springframework.web.bind.annotation.RestController
import java.sql.DriverManager
import java.sql.SQLException

@SpringBootApplication
class DemoApplication

fun main(args: Array<String>) {
	runApplication<DemoApplication>(*args)
}
@RestController
@CrossOrigin(origins = ["http://localhost:3000"])
class MessageController(val jdbcTemplate: JdbcTemplate) {
	@GetMapping("/alldata")
	fun getMessage(): List<List<Any>>? {
		return jdbcTemplate.query("SELECT data_nice FROM personal_record") { rs, _ ->
			(1..rs.metaData.columnCount).map { rs.getObject(it) }
		}
	}

	@GetMapping("/test")
	fun test():String{
		return "nice";
	}
}