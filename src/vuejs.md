# vue.js——轻量级前端框架

---

## 功能和基本概念
### 功能
1. 数据渲染/数据同步
2. 组件化/模块化
3. 其他功能：路由、ajax、数据流
### 基本概念
1. 全局API
2. 实例选项
3. 实例属性/方法
4. 指令
5. 内置组件

reference：  
1. vuejs中文官网-[http://cn.vuejs.org/](http://cn.vuejs.org/)  
2. vuejs源码-[http://github.com/vuejs/vue](http://github.com/vuejs/vue)  
3. vuejs官方工具-[http://github.com/vuejs](http://github.com/vuejs)  
4. vuejs官方论坛-[http://forum.vuejs.org/](http://forum.vuejs.org/)

## Vue Install

- 直接用script引入

- CDN

	`<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>`  
- NPM 
 
	`npm install vue`  

- 命令行工具（CLI脚手架工具）

		# 全局安装 vue-cli
		$ npm install --global vue-cli
		# 创建一个基于 webpack 模板的新项目
		$ vue init webpack my-project
		# 安装依赖，走你
		$ cd my-project
		$ npm run dev

## vue实例

**vue实例对象：构造函数=参数选项+构造参数**

### 生命周期

![]('lifecycle.png')

> 每个 Vue 实例在被创建时都要经过一系列的初始化过程——例如，需要设置数据监听、编译模板、将实例挂载到 DOM 并在数据变化时更新 DOM 等。同时在这个过程中也会运行一些叫做生命周期钩子的函数，这给了用户在不同阶段添加自己的代码的机会。

### 实现根组件和组件之间的相互关系

**组件树结构例子：**

![]('component.png')

## 数据渲染



## 组件

### 组件注册

main.js

	// 1全局注册
	Vue.component('my-header', {
 		template: '<p>this is my header</p>'
 	})
	// 2局部注册
	// 组件的配置=实例选项+实例属性
	var myHeader = {
		template: '...'
	}
	new Vue({
		el:...,
		data:...,
		components: {
			'my-header': myHeader  // 组件配置
		}
	})
### 组件使用

main.js

	//根节点中使用
	new Vue({
		el: '#app',
		template: "...",
		data:{...}
	})
或者直接在根节点使用  
index.html
	
	<!-- 挂载点 -->
	<div id="app">
		<my-header></my-header>
	</div>

### 搭建组件树 页面的结构

**使用前面两种方式去搭建**
> 这里需要注意的是，组件的data里面通常不直接赋值，避免直接引用赋值，而使用function去返回，以实现重复组件独立的数据

## 路由

> 官方例子：[https://github.com/chrisvfritz/vue-2.0-simple-routing-example.git](https://github.com/chrisvfritz/vue-2.0-simple-routing-example.git "vue-router")  
> 官方详细文档：[https://router.vuejs.org/zh-cn/](https://router.vuejs.org/zh-cn/ "vue-router")  

### Install

#### CDN
 `<script src="https://cdn.jsdelivr.net/npm/vue@2.5.16/dist/vue.js"></script>`  
#### NPM
	npm install vue-router
#### 构建开发版
	git clone https://github.com/vuejs/vue-router.git node_modules/vue-router
	cd node_modules/vue-router
	npm install
	npm run build
## ajax



