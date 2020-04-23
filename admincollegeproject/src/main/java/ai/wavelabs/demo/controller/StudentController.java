package ai.wavelabs.demo.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import ai.wavelabs.demo.Request.StudentRequest;
import ai.wavelabs.demo.Request.UpdateStudentRequest;
import ai.wavelabs.demo.Response.Response;
import ai.wavelabs.demo.model.StudentInformationModel;
import ai.wavelabs.demo.service.StudentInfoService;

@RestController
@RequestMapping(value = "/studentdata")
@CrossOrigin(origins = "http://localhost:3000")



public class StudentController {
	@Autowired
	private StudentInfoService studentInfoService;

	public StudentController(StudentInfoService studentInfoService) {
		super();
		this.studentInfoService = studentInfoService;
	}

	@PostMapping(value = "/PostAllStudentDetails")
	ResponseEntity<Response> saveStudentInfo(@RequestBody StudentRequest studentRequest) {
		return ResponseEntity.status(HttpStatus.OK).body(studentInfoService.saveStudentDetails(studentRequest));
	}

	@GetMapping(value = "/getAllSutdentDetails")
	ResponseEntity<List<StudentInformationModel>> getAllStudentDetails() {
		List<StudentInformationModel> studentInformationModels = studentInfoService.getAllStudentDetails();
		return ResponseEntity.status(HttpStatus.OK).body(studentInformationModels);
	}

	@PostMapping(value = "/editStudentDetails")
	ResponseEntity<Response> updateById(@RequestBody UpdateStudentRequest updateStudentRequest) {
		return ResponseEntity.status(HttpStatus.OK).body(studentInfoService.updateData(updateStudentRequest));
	}

	
	/*
	 * @GetMapping(value = "/sort") public
	 * ResponseEntity<List<StudentInformationModel>> getAllEmployeesForSort(
	 * 
	 * @RequestParam(defaultValue = "name") String sortBy) {
	 * List<StudentInformationModel> list =
	 * studentInfoService.getAllEmployeesforsort(sortBy); return new
	 * ResponseEntity<List<StudentInformationModel>>(list, new HttpHeaders(),
	 * HttpStatus.OK); }
	 */
	
	@GetMapping (value="/getStudentName/{name}")
	ResponseEntity<List<StudentInformationModel>> getbyName(@PathVariable String name) {
		List<StudentInformationModel> nameresponse = studentInfoService.getByStudentName(name);
		return ResponseEntity.status(HttpStatus.OK).body(nameresponse);
	}
	
			
}
