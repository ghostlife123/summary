
比较:
	1.比较运算符:
		===		全等(值和类型)
	2.逻辑运算符:
		&&
		||
		!
	3.条件运算符:
		variablename=(condition)?value1:value2
		greetding=(visitor=="PRES")?"GHOST":"LIFE"
		变量visitor的值是PRES,则向变量greetding赋值"GHOST"否则赋值"LIFE"

语句:
	1.if语句
		if(condition==true){}
	2.switch
		switch(n){
			case 1:
				statements
				break;
			case 2:
				statememts
				break;
			default:
				statements
		}
	3.循环
		for循环:
			遍历数组对象
			for (var i=0;i<cars.length;i++){
				statements
			}
		for/in循环
			遍历json对象,数组对象
			var person={fname:"Jane",lname:"Doe",age:24}
			for( x in person){
				document.write(x);
				document.write(" : ")
				document.write(people[x]);
				document.write("<br />");
			}
		break:跳出当前循环,代码块
		continue:跳过当前循环,代码块
	4:语句标记
		javascript可以进行语句标记,代码块
			lable:语句
		cars=["BMW","Volvo","Saab","Ford"];
		list:{
			document.write(cars[0] + "<br>");
			document.write(cars[1] + "<br>");
			document.write(cars[2] + "<br>");
			break list;							<<<<<<<<<<<<<
			document.write(cars[3] + "<br>");
			document.write(cars[4] + "<br>");
			document.write(cars[5] + "<br>");
		}
对象
	1:日期对象
		var sysdate=new Date();
		getTime():返回1970年1月1日至今的毫秒数;
		getDay():返回星期的第几天(0:Sunday);
		setFullYear():设置具体日期;
	2:数组对象
		创建数组
			var first=[1,2,3,4,5];
			var second=[6,7,8,9,10];
		属性:length
		合并数组
			var third=first.concat(second);
		join():用数组元素组成字符串;
			first.join();---->1,2,3,4,5
			second.join(".");---->6.7.8.9.10
		排序sort()
			默认将排序内容当成字符串来处理.按照字符编码的顺序进行排序排列
			按照数字大小排序需要借助排序函数来处理
				function NumAsc(a,b){
					return a-b;
				}
				function NumDesc(a,b){
					return b-a;
				}
		push()向数组的末尾添加一个或更多的元素,并返回新的长度
		reverse()颠倒数组中元素的顺序;
		shift() 	删除并返回第一个元素;
		pop()		删除并返回最后一个函数;
		slice()		从某个已有的数组返回选定的元素
		splice()	删除元素，并向数组添加新元素
	3:Math函数
		round(x)	返回四舍五入最接近的整数
		random()	返回 0 ~ 1 之间的随机数
		max()
		min()
		ceil(x)		对数进行向上舍入
		floor(x)	对数进行向下舍入
		abs(x)		数的绝对值
	4.RegExp 正则表达式
		var pat = new RegExp("e");  --->检索"e"字符
		test()
			检索字符串中的指定值,返回true和false;
		exec()
			检索字符串中指定的值,找到返回指定的值,未找到返回null
		compile()
			用于改变RegExp
			pat.compile("d");
	5.window对象:所有浏览器都支持的对象,表示浏览器窗口
		一般不会用到
	6.document对象
		主要用于获取element对象
	7.element对象
		操作浏览器html对象的属性,属性的值,获取方法以及获取值的方法
	