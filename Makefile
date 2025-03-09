########################################################################
####################### Makefile Template ##############################
########################################################################
# Student settings
NAME = Toan Nguyen
SID = 1001862752
EMAIL = ttn2752@mavs.uta.edu
SEMESTER = SPRING2025
PROJECT=PROJ03
YOUTUBE = https://youtube.com/shorts/-YnDC3fUCHk
 

####### DO NOT EDIT BELOW THIS LINE!!! #########
author: 
	@echo $(NAME)
	@echo $(SID)
	@echo $(EMAIL)
	@echo $(SEMESTER)

submit:
submit:
	git ls-files | zip -r "submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip" -@
	@echo "Submission zip file created: submission_$(SEMESTER)_$(PROJECT)_$(SID)_$(NAME).zip"