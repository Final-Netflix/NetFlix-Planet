package classification.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import classification.bean.ClassificationDTO;
import classification.service.ClassificationService;

@Controller
@CrossOrigin(origins = "http://localhost:3000")
public class ClassificationController {
	
	@Autowired
	ClassificationService classificationService;
	
	@GetMapping("/getClassifications")
	@ResponseBody
//	return all classifications - writer smile
//	use to make recommend list
	public List<ClassificationDTO> getClassifications(){
		return classificationService.getClassifications();
	}
}
