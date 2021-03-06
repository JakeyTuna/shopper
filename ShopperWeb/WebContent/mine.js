// mine page
var expCEIndex = 0;
function expendCreateEvent(){
	expCEIndex += 1;
	if(expCEIndex % 2 == 1){
		resetJELayout();
		$("#ceexpBtn").removeClass("glyphicon glyphicon-collapse-down");
		$("#ceexpBtn").addClass("glyphicon glyphicon-collapse-up");
		setTimeout(function(){
			var changepxVal = $("#joineventbox").outerHeight() - 34;
			$("#createeventbox").outerHeight(($("#maincontent").outerHeight()/2)-$("#createeventheader").outerHeight()-16 + changepxVal);
			$("#joineventbox").outerHeight(($("#maincontent").outerHeight()/2)-$("#joineventheader").outerHeight()-16 - changepxVal);
		},200);
	}else{
		resetMineLayout();
	}
}

var expJEIndex = 0;
function expendJoinEvent(){
	expJEIndex += 1;
	if(expJEIndex % 2 == 1){
		resetCELayout();
		$("#jeexpBtn").removeClass("glyphicon glyphicon-collapse-down");
		$("#jeexpBtn").addClass("glyphicon glyphicon-collapse-up");
		setTimeout(function(){
			var changepxVal = $("#createeventbox").outerHeight() - 34;
			$("#createeventbox").outerHeight(($("#maincontent").outerHeight()/2)-$("#createeventheader").outerHeight()-16 - changepxVal);
			$("#joineventbox").outerHeight(($("#maincontent").outerHeight()/2)-$("#joineventheader").outerHeight()-16 + changepxVal);
		},200);
	}else{
		resetMineLayout();
	}
}

function resetCELayout(){
	expCEIndex = 0;
	$("#ceexpBtn").removeClass("glyphicon glyphicon-collapse-up");
	$("#ceexpBtn").addClass("glyphicon glyphicon-collapse-down");
	$("#createeventbox").outerHeight(($("#maincontent").outerHeight()/2)-$("#createeventheader").outerHeight()-16);
	$("#joineventbox").outerHeight(($("#maincontent").outerHeight()/2)-$("#joineventheader").outerHeight()-16);
}

function resetJELayout(){
	expJEIndex = 0;
	$("#jeexpBtn").removeClass("glyphicon glyphicon-collapse-up");
	$("#jeexpBtn").addClass("glyphicon glyphicon-collapse-down");
	$("#createeventbox").outerHeight(($("#maincontent").outerHeight()/2)-$("#createeventheader").outerHeight()-16);
	$("#joineventbox").outerHeight(($("#maincontent").outerHeight()/2)-$("#joineventheader").outerHeight()-16);
}

function resetMineLayout(){
	resetCELayout();
	resetJELayout();
}

function launchCreateEvent(){
	
	var createPageHtml = '\
		<div class="container">\
			<div class="row">\
				<div class="col-xs-12">\
					<input id="pubfriswitch" data-label-text="Click to switch" type="checkbox">\
				</div>\
			</div>\
			<div class="row mytopbuffer">\
				<div class="col-xs-12">\
					<input type="text" id="eventtitle" class="form-control input-sm" placeholder="Event title">\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-4">\
					<div class="thumbnail">\
						<img src="img/photo01.png" class="img-responsive img-rounded mybigimg">\
					</div>\
				</div>\
				<div class="col-xs-8 myleftpadding">\
					<div class="row">\
						<div class="col-xs-12">\
							<select id="category" class="form-control input-sm">\
								<option>Choose a category</option>\
								<option>Clothes</option>\
								<option>Beauty</option>\
								<option>Glasses</option>\
								<option>Sports</option>\
								<option>Entertainment</option>\
								<option>Electronic</option>\
								<option>Healthy Care</option>\
								<option>Kitchen</option>\
							</select>\
						</div>\
					</div>\
					<div class="row">\
						<div class="col-xs-12">\
							<select id="duration" class="form-control input-sm">\
								<option>Choose a duration</option>\
								<option>5 min</option>\
								<option>10 min</option>\
								<option>15 min</option>\
								<option>20 min</option>\
								<option>25 min</option>\
								<option>30 min</option>\
								<option>40 min</option>\
								<option>50 min</option>\
								<option>1 hr</option>\
								<option>1 hr 30 min</option>\
								<option>2 hr</option>\
								<option>2 hr 30 min</option>\
								<option>3 hr</option>\
								<option>3 hr 30 min</option>\
								<option>4 hr</option>\
								<option>5 hr</option>\
								<option>6 hr</option>\
							</select>\
						</div>\
					</div>\
				</div>\
			</div>\
			<div class="row mytopbuffer">\
				<div class="col-xs-3">\
					<font size="4"><span onclick="minusCapacity()" class="glyphicon glyphicon-minus pull-right byqcontrol"></span></font>\
				</div>\
				<div class="col-xs-6">\
					<font size="4"><strong id="capacityValue">3</strong></font><font size="2">&nbsp;&nbsp;&nbsp;<em>participants</em></font>\
				</div>\
				<div class="col-xs-3">\
					<font size="4"><span onclick="addCapacity()" class="glyphicon glyphicon-plus byqcontrol"></span></font>\
				</div>\
			</div>\
			<div class="row mytopbuffer">\
				<div class="col-xs-12">\
					<textarea class="form-control input-sm" rows="3" placeholder="Description"></textarea>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-12">\
					<textarea class="form-control input-sm" rows="3" placeholder="Put google map location picker here"></textarea>\
				</div>\
			</div>\
			<div class="row mytopbuffer">\
				<div class="col-xs-12">\
					<button class="btn btn-primary btn-sm" style="width:100%" onclick="initialEvent()">Create</button>\
				</div>\
			</div>\
		</div>';
	$("#sidecontent").html(createPageHtml);
	$("#headertext").html("New Post");
	$("#headerbtn").addClass("sr-only");
	$("#backbtn").removeClass("sr-only");
	$("#backbtn").attr("onclick","backToMine()");
	
	//$("#createbox").outerHeight($("#maincontent").outerHeight()-32);
	$('#pubfriswitch').bootstrapSwitch('size', 'small');
	$('#pubfriswitch').bootstrapSwitch('onText', 'To Friends');
	$('#pubfriswitch').bootstrapSwitch('offText', 'To Public');
	
	$("#sidecontent").css("left","0");
}

function addCapacity(){
	var tempValue = Number($("#capacityValue").html());
	$("#capacityValue").html(tempValue + 1);
}

function minusCapacity(){
	var tempValue = Number($("#capacityValue").html());
	$("#capacityValue").html(tempValue - 1);
}

function initialEvent(){
	
	
	// success
	backToMine();
}

function launchEventDetail(id){
	var eventPageHtml = '\
		<div class="container">\
			<div class="row">\
				<div class="col-xs-12">\
					<div class="thumbnail">\
						<img src="img/photo01.png" class="img-rounded" onclick="imgExpend()" id="eventDetailImg">\
					</div>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-12">\
					<div class="thumbnail">\
						<div class="row">\
							<div class="col-xs-12">\
								<font size="2" id="descriptionLabel">Description blah blah blah blah blah blah blah blah</font>\
								<textarea id="descriptionEdit" class="form-control input-sm sr-only" rows="3"></textarea>\
							</div>\
						</div>\
						<div class="row">\
							<div class="col-xs-6" id="editTime">\
								<font id="editDurationLabel" size="2">Ends in 29 min</font>\
								<select id="durationEdit" class="form-control input-sm sr-only">\
									<option>Choose a duration</option>\
									<option>5 min</option>\
									<option>10 min</option>\
									<option>15 min</option>\
									<option>20 min</option>\
									<option>25 min</option>\
									<option>30 min</option>\
									<option>40 min</option>\
									<option>50 min</option>\
									<option>1 hr</option>\
									<option>1 hr 30 min</option>\
									<option>2 hr</option>\
									<option>2 hr 30 min</option>\
									<option>3 hr</option>\
									<option>3 hr 30 min</option>\
									<option>4 hr</option>\
									<option>5 hr</option>\
									<option>6 hr</option>\
								</select>\
							</div>\
							<div class="col-xs-6" id="editTag">\
								<font id="editTagLabel" size="2">Clothes</font>\
								<select id="categoryEdit" class="form-control input-sm sr-only">\
									<option>Choose a category</option>\
									<option>Clothes</option>\
									<option>Beauty</option>\
									<option>Glasses</option>\
									<option>Sports</option>\
									<option>Entertainment</option>\
									<option>Electronic</option>\
									<option>Healthy Care</option>\
									<option>Kitchen</option>\
								</select>\
							</div>\
						</div>\
						<div class="row">\
							<div class="col-xs-6">\
								<div id="capaContent1"><font size="2">1 / 3 Join</font></div>\
							</div>\
							<div class="col-xs-6">\
								<div id="capaContent2"><button class="btn btn-info btn-xs" onclick="viewParticipants('+id+')">View</button></div>\
							</div>\
							<div class="col-xs-12">\
								<div id="capacityEdit" class="row sr-only">\
									<div class="col-xs-3">\
										<font size="4"><span onclick="minusCapacityEdit()" class="glyphicon glyphicon-minus pull-right byqcontrol"></span></font>\
									</div>\
									<div class="col-xs-6">\
										<font size="4"><strong id="capacityValueEdit">3</strong></font><font size="2">&nbsp;&nbsp;&nbsp;<em>participants</em></font>\
									</div>\
									<div class="col-xs-3">\
										<font size="4"><span onclick="addCapacityEdit()" class="glyphicon glyphicon-plus byqcontrol"></span></font>\
									</div>\
								</div>\
							</div>\
						</div>\
					</div>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-12">\
					<button id="editBtn" class="btn btn-default btn-xs" style="width:100%" onclick="launchEdit()"><span class="glyphicon glyphicon-edit"></span> Edit</button>\
					<button id="updateBtn" class="btn btn-primary btn-xs sr-only" style="width:100%" onclick="confirmUpdate()">Update</button>\
					<button id="cancelBtn" class="btn btn-danger btn-xs" style="width:100%" onclick="cancelEvent('+id+')">Cancel Event</button>\
				</div>\
			</div>\
			<div class="row mytopbuffer">\
				<div class="col-xs-12">\
					<div class="thumbnail" id="chatBox">\
						<div class="row">\
							<div class="col-xs-3 col-sm-2"><img src="img/photo0'+id+'.png" class="img-responsive img-rounded myimg"></div>\
							<div class="col-xs-9 col-sm-10">\
								<div class="row mynegtop"><font size="1"><strong>Where should I meet you?</strong></font></div>\
								<div class="row mynegtop"><font size="1"><small>Bie Yaqing <em>1 mins ago</em></small></font></div>\
							</div>\
						</div>\
					</div>\
					<div class="thumbnail">\
						<div class="row">\
							<div class="col-xs-9 col-sm-10"><input type="text" class="form-control input-sm"></div>\
							<div class="col-xs-3 col-sm-2 myleftpadding"><button class="btn btn-primary btn-sm">Post</button></div>\
						</div>\
					</div>\
				</div>\
			</div>\
		</div>';
	$("#sidecontent").html(eventPageHtml);
	$("#headertext").html("EventTitle");
	$("#headerbtn").addClass("sr-only");
	$("#backbtn").removeClass("sr-only");
	$("#backbtn").attr("onclick","backToMine()");
	VIEWINGEVENT = id;
	
	//$("#createbox").outerHeight($("#maincontent").outerHeight()-32);
	
	$("#sidecontent").css("left","0");
}

function updateEvent(){
	
	
	// success
	closeEditCapa();
	$("#updateBtn").addClass("sr-only");
	//$("#cancelBtn").removeClass("sr-only");
}

function launchEventDetailForView(id){
	var eventPageHtml = '\
		<div class="container">\
			<div class="row">\
				<div class="col-xs-12">\
					<div class="thumbnail">\
						<img src="img/photo0'+id+'.png" class="img-rounded" onclick="imgExpend()" id="eventDetailImg">\
					</div>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-12">\
					<div class="thumbnail">\
						<div class="row">\
							<div class="col-xs-12">\
								<font size="2">Description blah blah blah blah blah blah blah blah</font>\
							</div>\
						</div>\
						<div class="row">\
							<div class="col-xs-6" id="tag">\
								<font id="durationLabel" size="2">Ends in 29 min</font>\
							</div>\
							<div class="col-xs-6" id="tag">\
								<font id="tagLabel" size="2">Clothes</font>\
							</div>\
						</div>\
						<div class="row">\
							<div class="col-xs-6" id="editTime">\
								<font size="2">1 / 3 Join</font>\
							</div>\
							<div class="col-xs-6">\
								<button class="btn btn-info btn-xs" onclick="viewParticipants('+id+')">View</button>\
							</div>\
						</div>\
					</div>\
				</div>\
			</div>\
			<div class="row">\
				<div class="col-xs-12">\
					<div class="thumbnail" id="chatBox">\
						<div class="row">\
							<div class="col-xs-3 col-sm-2"><img src="img/photo0'+id+'.png" class="img-responsive img-rounded myimg"></div>\
							<div class="col-xs-9 col-sm-10">\
								<div class="row mynegtop"><font size="1"><strong>Where should I meet you?</strong></font></div>\
								<div class="row mynegtop"><font size="1"><small>Bie Yaqing <em>1 mins ago</em></small></font></div>\
							</div>\
						</div>\
					</div>\
					<div class="thumbnail">\
						<div class="row">\
							<div class="col-xs-9 col-sm-10"><input type="text" class="form-control input-sm"></div>\
							<div class="col-xs-3 col-sm-2 myleftpadding"><button class="btn btn-primary btn-sm">Post</button></div>\
						</div>\
					</div>\
				</div>\
			</div>\
		</div>';
	$("#sidecontent").html(eventPageHtml);
	$("#headertext").html("EventTitle");
	$("#headerbtn").addClass("sr-only");
	$("#backbtn").removeClass("sr-only");
	$("#backbtn").attr("onclick","backToMine()");
	
	//$("#createbox").outerHeight($("#maincontent").outerHeight()-32);
	
	$("#sidecontent").css("left","0");
}

var imgExpInx = 0;
function imgExpend(){
	if(imgExpInx % 2 == 0){
		$("#eventDetailImg").css("height", "140px");
	}else{
		$("#eventDetailImg").css("height", "40px");
	}
	imgExpInx += 1;
}

function launchEdit(){
	launchEditTag();
	launchEditDesc();
	launchEditDuration();
	launchEditCapa();
	$("#editBtn").addClass("sr-only");
	$("#updateBtn").removeClass("sr-only");
}

function confirmUpdate(){
	
	
	//success
	closeEditTag();
	closeEditDesc();
	closeEditDuration();
	closeEditCapa();
	$("#updateBtn").addClass("sr-only");
	$("#editBtn").removeClass("sr-only");
}

function launchEditTag(){
	$("#editTagLabel").addClass("sr-only");
	$("#categoryEdit").removeClass("sr-only");
}

function closeEditTag(){
	$("#editTagLabel").removeClass("sr-only");
	$("#categoryEdit").addClass("sr-only");
}

function launchEditDesc(){
	$("#descriptionLabel").addClass("sr-only");
	$("#descriptionEdit").removeClass("sr-only");
	
}

function closeEditDesc(){
	$("#descriptionLabel").removeClass("sr-only");
	$("#descriptionEdit").addClass("sr-only");
}

function launchEditDuration(){
	$("#editDurationLabel").addClass("sr-only");
	$("#durationEdit").removeClass("sr-only");
}

function closeEditDuration(){
	$("#editDurationLabel").removeClass("sr-only");
	$("#durationEdit").addClass("sr-only");
}

function launchEditCapa(){
	$("#capaContent1").addClass("sr-only");
	$("#capaContent2").addClass("sr-only");
	$("#capacityEdit").removeClass("sr-only");
}

function closeEditCapa(){
	$("#capaContent1").removeClass("sr-only");
	$("#capaContent2").removeClass("sr-only");
	$("#capacityEdit").addClass("sr-only");
}

function addCapacityEdit(){
	$("#updateBtn").removeClass("sr-only");
	var tempValue = Number($("#capacityValueEdit").html());
	$("#capacityValueEdit").html(tempValue + 1);
}

function minusCapacityEdit(){
	$("#updateBtn").removeClass("sr-only");
	var tempValue = Number($("#capacityValueEdit").html());
	$("#capacityValueEdit").html(tempValue - 1);
}

function backToMine(){
	$("#sidecontent").css("left","100%");
	$("#headertext").html("Mine");
	$("#backbtn").addClass("sr-only");
	$("#headerbtn").removeClass("sr-only");
}

function cancelEvent(id){
	var r = confirm("Are you sure cancel this event?");
	if(r == true){
		
		
		//success
		backToMine();
	}else{
		
	}
}