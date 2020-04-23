package ai.wavelabs.demo.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import ai.wavelabs.demo.Repository.AdminRepository;
import ai.wavelabs.demo.Request.StudentRequest;
import ai.wavelabs.demo.Request.UpdateStudentRequest;
import ai.wavelabs.demo.Response.Response;
import ai.wavelabs.demo.exception.RecordNotFoundException;
import ai.wavelabs.demo.model.StudentInformationModel;

@Service
public class StudentInfoService {
	@Autowired
	private AdminRepository adminRepository;

	public StudentInfoService(AdminRepository adminRepository) {
		super();
		this.adminRepository = adminRepository;
	}

	public Response saveStudentDetails(StudentRequest studentRequest) {
		StudentInformationModel informationModel = new StudentInformationModel();
		informationModel.setName(studentRequest.getName());
		informationModel.setEmailId(studentRequest.getEmailId());
		informationModel.setPhoneNumber(studentRequest.getPhoneNumber());
		informationModel.setBranch(studentRequest.getBranch());
		informationModel.setRollNumber(studentRequest.getRollNumber());
		informationModel.setFatherName(studentRequest.getFatherName());
		informationModel.setAddress1(studentRequest.getAddress1());
		informationModel.setAddress2(studentRequest.getAddress2());
		informationModel.setCity(studentRequest.getCity());
		informationModel.setState(studentRequest.getState());
		adminRepository.save(informationModel);
		return new Response("Student Information saved.!!");
	}

	public List<StudentInformationModel> getAllStudentDetails() {
		return adminRepository.findAll();
	}

	public Response updateData(UpdateStudentRequest updateStudentRequest) {
		Optional<StudentInformationModel> studentInfoResponse = adminRepository
				.findById(updateStudentRequest.getStudentId());
		if (studentInfoResponse.isPresent()) {
			StudentInformationModel informationModel = studentInfoResponse.get();
			informationModel.setStudentId(updateStudentRequest.getStudentId());
			informationModel.setEmailId(updateStudentRequest.getEmailId());
			informationModel.setAddress1(updateStudentRequest.getAddress1());
			informationModel.setAddress2(updateStudentRequest.getAddress2());
			informationModel.setCity(updateStudentRequest.getCity());
			informationModel.setState(updateStudentRequest.getState());
			adminRepository.save(informationModel);
			return new Response("Student Information saved.!!");
		}

		throw new RecordNotFoundException("No record Found");
	}
	/*
	 * public List<StudentInformationModel> getAllEmployeesforsort(String sortBy) {
	 * Sort sortOrder = Sort.by("name"); List<StudentInformationModel> list =
	 * adminRepository.findAll(sortOrder); return list; }
	 */

	public List<StudentInformationModel> getByStudentName(String name) {
		 List<StudentInformationModel> studentData = adminRepository.findByName(name);
		 if(studentData != null) {
			 return studentData;
		 }
		 throw new RecordNotFoundException("Record Not Present in this name");
		
	}

}
