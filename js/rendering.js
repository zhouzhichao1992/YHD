window.onload =function(){
	//页面渲染js代码
	var goods = document.getElementsByClassName("goods")[0];
	ajax({
		url: "json/index.json",
		method: "get",
		success:function(res){
			var json = JSON.parse(res);
			var html = "";
			for(var i = 0; i < json.length; i++) {
				html += `
				<ul id = "Gshop">
					<li> 
						<img src="img/${json[i].src}" style="width: 120px;"/>
						<input class="bid" type="hidden" value="${json[i].shopId}"/>
						<span class="uname">${json[i].uName}</span>
						<div class="progressBar"><span></span></div>
						<span class="money">现价:￥${json[i].price}<i>原价:￥${json[i].money}</i></span>
					</li>
				</ul>
				`;
			}
			goods.innerHTML = html;
			var uName = decodeURI(location.href.split("=")[1]);
			$(".goods > ul").click(function(){
				var bid = $(this).children().children(".bid").val();
				$(location).attr("href","shopping.html?shopid="+bid+"&userName="+uName);
				//location.href = "shopping.html?userName=" + _this.userName;

			})
		}
		
	});
}
















