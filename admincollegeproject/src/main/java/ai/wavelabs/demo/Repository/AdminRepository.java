package ai.wavelabs.demo.Repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import ai.wavelabs.demo.model.StudentInformationModel;

@Repository
public interface AdminRepository extends JpaRepository<StudentInformationModel, Integer> {
	
	public List<StudentInformationModel> findByName(String name);
	

}
