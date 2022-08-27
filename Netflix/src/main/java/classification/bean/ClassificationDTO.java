package classification.bean;

import lombok.Data;

@Data
public class ClassificationDTO {
	private int classification_id;
	private String classification_name;
	private String classification_type;
	private String search_url;
}
