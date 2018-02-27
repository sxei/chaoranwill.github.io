---
layout:     post
title:      "FE knowledge fragment"
subtitle:   " "
date:       2018-02-27 19:55:00
author:     "Chaoran"
header-img: "img/post-bg-web-fragment.png"
noToc:      true
tags:
    - 前端开发
---

> “To be is to be perceived. ”

* 目录
{:toc #toc}
博客
ES6

箭头函数：
函数内的this对象，是定义时所在的对象，不是使用时所在的对象
不可当构造函数
用rest代替argument
this指向一般可变，但在箭头函数中固定
简单，单行，不会复用的函数建议使箭头函数|
复杂，行多，使用传统

promise
1） pending 进行中
2） resolved 已完成
3） rejected 已失败
是一个容器；
包含某个未来结束的事件
是一个对象：
从它可获取异步操作的消息

特点：
1） 状态不受外界影响，只有事件结果决定
2） 状态改变不会再变

缺点：
1） 无法取消promise，一旦建立立即执行，中途无法撤回
2） 无回掉函数的话，错误不反应到外部
3） pending时，状态无法得知

 Promise.all
在不同的接口请求数据然后拼合成自己所需的数据，通常这些接口之间没有关联（例如不需要前一个接口的数据作为后一个接口的参数）
 Promise.race
它同样接收一个数组，不同的是只要该数组中的 Promise 对象的状态发生变化（无论是 resolve 还是 reject）该方法都会返回

interator 
是一种接口，为所有数据结构提供一种统一的访问机制，即for...of 循环 
作用：
一是为各种数据结构，提供一个统一的、简便的访问接口；
二是使得数据结构的成员能够按某种次序排列；
三是ES6创造了一种新的遍历命令for...of循环，Iterator接口主要供for...of消费。
interator遍历过程：
1. 创建一个只针对象，指向当前数据结构的起始位置（遍历器对象本质是指针对象）
2. 调用指针对象的next方法
使用场合：
1） 解构赋值
2） 扩展运算符（...）
3） yield*

for...in
为遍历对象设计，不适用数组
1） 以字符串作为键名
2） 遍历数字键以及手动添加的其他键
3） 可能会以任意顺序遍历键名
for...of
1） 语法简洁，无以上缺点
2） 不同用于foreach方法，可以与break，continue，return配合使用
3）提供了遍历所有数据结构的统一操作接口
4） 可自动遍历generator函数生成的iterator对象，

generator 函数
一种异步解决方案（一种封装了多个内部状态的状态机）
返回的不是函数运行结果，而是指向内部状态的指针对象
调用next方法，从停止地方开始执行，移向下一个状态
yield 与 return
相似：都能返回紧跟在语句后面那个表达式的值
区别：记忆功能，执行次数，返回值数量

回调函数
JavaScript对异步编程的实现

ES6 Object.assign
Object.assign(target, source1, source2);
后面属性覆盖前面同名属性
1） 一个参数时，返回该参数
2） 参数不是对象，转成对象（undefined，null会报错），若为源对象位置，则跳过
3） 可用来操作数组，将数组视为对象
4） 浅拷贝非深拷贝（若源对象的有对象属性值，则拷贝的是该引用）
用途：
1） 为兑现添加属性/方法
2） 克隆对象
3） 合并对象
4） 为属性指定默认值

JSONP 
被包含在一个回调函数中的 json
核心是： 动态添加script标签调用服务器提供的js脚本
cors
使用自定义的http头部让浏览器与服务器进行沟通，确定该请求是否成功
核心：由服务器发送一个相应标头

web安全
1） 将重要的cookie标记为http only
2） 只允许用户输入期望值
3） encode
4） 过滤或移除特殊标签
5） 过滤JavaScript事件标签

模块化
原理： 将复杂系统分解为代码结构更合理，可维护性更高，可管理的模块
目的： 只需完成自己的业务代码
发展过程：
1） commonjs
 	模块为单独的文件，require，同步使用
nodejs主要用于服务器进程，加载内容在本地磁盘
异步情况：浏览器环境中需要从服务器加载模块，需要采用异步模式
2） AMD（Asynchronous Module Definition）
允许输出模块兼容commonjs规范
require([module], callback);
模块加载与调用不同步，浏览器不会发生假死
requirejs   curljs
3） CMD
seajs推广中对模块定义的产出
与AMD区别：
amd推崇依赖前置（定义模块时申明其依赖的模块），cmd推崇依赖就近（用时再require）
amd的api默认一当多，cmd推崇职责单一（amd中require分全局和局部）
requirejs 与 seajs 分析：
1. 定位，requirejs想成为浏览器端的模块加载器，也想成为rhino/node等环境的模块加载器
seajs专注web浏览器端，通过node扩展方式方便跑在node端
2. 标准，requirejs醉醺amd规范，seajs遵循cmd，api不同
3. 理念，requirejs尝试让第三方类库修改自身来支持requirejs，seajs不强推，采用资助封装方式，已较成熟封装策略
4. 质量，require<seajs
5. 插件

react
ReactJS，用于构建用户界面的JavaScript库，主要用于构建ui，将普通的DOM以数据结构的形式展现出来
永远只需要关心数据整体，两次数据之间的UI如何变化，则完全交给框架去做，使用React大大降低了逻辑复杂性
Virtual DOM并没有完全实现DOM，Virtual DOM最主要的还是保留了Element之间的层次关系和一些基本属性。
　　基于React进行开发时所有的DOM构造都是通过虚拟DOM进行，每当数据变化时，React都会重新构建整个DOM树，然后React将当前整个DOM树和上一次的DOM树进行对比，得到DOM结构的区别，然后仅仅将需要变化的部分进行实际的浏览器DOM更新。
虚拟DOM是内存数据，性能是极高的，而对实际DOM进行操作的仅仅是Diff部分，因而能达到提高性能的目的。这样，不再需要关注某个数据的变化如何更新到一个或多个具体的DOM元素，而只需要关心在任意一个数据状态下，整个界面是如何Render的
设计特点：
变换：react核心认为ui只是把数据通过映射关系变换成另一种形式的数据——函数
组合：将两个或多个不同的抽象合并为一个
组件化：推荐以组件的方式思考ui构成，将小组件通过组合或嵌套构成大组件
组件特征：
可组合
可重用
可维护
jsx语法：
HTML 语言直接写在 JavaScript 语言之中，不加任何引号，这就是 JSX 的语法，它允许 HTML 与 JavaScript 的混写
生命周期：
组件的生命周期分成三个状态：
Mounting：已插入真实 DOM
Updating：正在被重新渲染
Unmounting：已移出真实 DOM
React 为每个状态都提供了两种处理函数，will 函数在进入状态之前调用，did 函数在进入状态之后调用，三种状态共计五种处理函数。
componentWillMount()
componentDidMount()
componentWillUpdate(object nextProps, object nextState)
componentDidUpdate(object prevProps, object prevState)
componentWillUnmount()
两种特殊状态的处理函数：
componentWillReceiveProps(object nextProps)：已加载组件收到新的参数时调用
shouldComponentUpdate(object nextProps, object nextState)：判断是否重新渲染时调用
angular
特性：
MVVM
模块化
自动化双向数据绑定
语义化标签
依赖注入
angular与react之对比
　　React 和 Angular 之间的巨大差异是 单向与双向绑定
React 和 Vue 都使用了虚拟 DOM
如果应用时常要处理大量的动态数据集，并以相对简便和高性能的方式对大型数据表进行显示和变更，由于双向数据绑定需要监听每一个可变元素, 数据量变大就会带来显著的性能问题，React是相当不错的选择。但是React不像AngularJS那样包含完整的功能，举例来说，React没有负责数据展现的控制器
　　React, 在另一方面, 使用虚拟DOM来跟踪元素的变化. 当检测到变化时, React会构建一个针对DOM变化的补丁, 然后应用这些补丁. 由于不必在每个元素每次变化时重新渲染整个巨大的table

软件架构
模式之间不同  主要是  M与V  的数据传递的流程不同
mvc

View 传送指令到 Controller
Controller 完成业务逻辑后，要求 Model 改变状态
Model 将新的数据发送到 View，用户得到反馈
MVC 可以分成两种方式：
通过 View 接受指令，传递给 Controller
直接通过controller接受指令

MVP

1. 各部分之间的通信，都是双向的。
2. View 与 Model 不发生联系，都通过 Presenter 传递。
3. View 非常薄，不部署任何业务逻辑，称为"被动视图"（Passive View），即没有任何主动性，而 Presenter非常厚，所有逻辑都部署在那里。

MVVM

用数据“绑定”的形式让数据更新的事件不需要开发人员手动去编写特殊用例，而是自动地双向同步。数据绑定你可以认为是Observer模式或者是Publish/Subscribe模式，原理都是为了用一种统一的集中的方式实现频繁需要被实现的数据更新问题。
MVVM不仅简化了业务与界面的依赖关系，还优化了数据频繁更新的解决方案

js垃圾回收与内存管理
各大浏览器通常用采用的垃圾回收有两种方法：标记清除、引用计数
自动垃圾回收机制(GC:Garbage Collecation)，也就是说，执行环境会负责管理代码执行过程中使用的内存
垃圾收集器会定期（周期性）找出那些不在继续使用的变量，然后释放其内存
1. 标记清除
垃圾收集器在运行的时候会给存储在内存中的所有变量都加上标记。然后，它会去掉环境中的变量以及被环境中的变量引用的标记。而在此之后再被加上标记的变量将被视为准备删除的变量，原因是环境中的变量已经无法访问到这些变量了。最后。垃圾收集器完成内存清除工作，销毁那些带标记的值，并回收他们所占用的内存空间
2. 引用计数
跟踪记录每个值被引用的次数
当声明了一个变量并将一个引用类型赋值给该变量时，则这个值的引用次数就是1。相反，如果包含对这个值引用的变量又取得了另外一个值，则这个值的引用次数就减1，释放那些引用次数为0的值所占的内存。
function problem() {
    var objA = new Object();
    var objB = new Object();

    objA.someOtherObject = objB;
    objB.anotherObject = objA;
}
这个方式存在一个比较大的问题就是循环引用
可以手动切断他们的循环引用
myObj.element = null;
element.someObject =null;
3. 减少JavaScript中的垃圾回收
在初始化的时候新建对象，然后在后续过程中尽量多的重用这些创建好的对象。
另外还有以下三种内存分配表达式（可能不像new关键字那么明显了）：
{} （创建一个新对象）
[] （创建一个新数组）
function() {…} (创建一个新的方法，注意：新建方法也会导致垃圾收集！！)
4. 优化
1）对象object优化
避免使用new/{}来新建对象
cr.wipe(obj)—遍历此对象的所有属性，并逐个删除，最终将对象清理为一个空对象  

2）数组array优化
arr = [];     //将原数组变成一小片内存垃圾
arr.length = 0    //清空数组

闭包
特点：
1、函数
2、能访问另外一个函数作用域中的变量
ES 6之前，Javascript只有函数作用域的概念，没有块级作用域。即外部是访问不到函数作用域中的变量。
总结
可以访问外部函数作用域中变量的函数
被内部函数访问的外部函数的变量可以保存在外部函数作用域内而不被回收---这是核心，后面我们遇到闭包都要想到，我们要重点关注被闭包引用的这个变量。
作用域链
为什么闭包就能访问外部函数的变量呢
Javascript中有一个执行环境(execution context)的概念，它定义了变量或函数有权访问的其它数据，决定了他们各自的行为。每个执行环境都有一个与之关联的变量对象，环境中定义的所有变量和函数都保存在这个对象中
当访问一个变量时，解释器会首先在当前作用域查找标示符，如果没有找到，就去父作用域找，直到找到该变量的标示符或者不再存在父作用域了，这就是作用域链。
作用域链的顶端是全局对象。对于全局环境中的代码，作用域链只包含一个元素：全局对象
作用域链和原型继承：
有点类似，但又有点小区别：如果去查找一个普通对象的属性时，在当前对象和其原型中都找不到时，会返回undefined；但查找的属性在作用域链中不存在的话就会抛出ReferenceError。
闭包中的this作用域
https://www.cnblogs.com/nuanriqingfeng/p/5789003.html


闭包的运用
1. 匿名自执行函数
有的函数只需要执行一次，其内部变量无需维护，执行后释放变量
2. 实现封装/模块化代码
变量作用域为函数内部，外部无法访问  
3. 实现面向对象中的对象
这样不同的对象(类的实例)拥有独立的成员及状态，互不干涉
优点：
可以让一个变量常驻内存 (如果用的多了就成了缺点
避免全局变量的污染
私有化变量
缺点：
因为闭包会携带包含它的函数的作用域，因此会比其他函数占用更多的内存
引起内存泄露

事件委托和this
事件委托
由其它元素而非事件目标元素来响应事件产生的行为的思想。如用ul元素来处理其子元素li的事件。
事件冒泡：stopPropagation、stopImmediatePropagation、preventDefault
订阅发布
优点：减少监听器数量，改善性能
缺点：父容器的侦听器可能需要检查事件来选择正确的操作
this
this 关键字在JavaScript中的一种常用方法是指代码当前上下文。
默认指向全局对象，其通常是window
this总是代表它的直接调用者(js的this是执行上下文), 例如 obj.func ,那么func中的this就是obj
在默认情况(非严格模式下),则this指的是 window (约定俗成)
在严格模式下,没有直接调用者的函数中的this是 undefined
使用call,apply,bind绑定的,this指的是 绑定的对象
在异步编程中，this可以很容易改变过程中一个功能操作。保持处理程序上下文的一个小技巧是将其设置到闭包内的一个变量，当在上下文改变的地方调用一个函数时，如setTimeout，你仍然可以通过该变量引用需要的对象。
箭头函数中的this
箭头函数没有自己的this, 它的this是继承而来; 默认指向在定义它时所处的对象(宿主对象),而不是执行时的对象, 定义它的时候,可能环境是window; 箭头函数可以方便地让我们在 setTimeout ,setInterval中方便的使用this

restful架构
Fielding将他对互联网软件的架构原则，定名为REST，即Representational State Transfer的缩写。我对这个词组的翻译是"资源的表现层状态转化"。

vue
父-子
props
子-父
on/emit  
其他
使用空的vue实例作为中央事件总线


Fetch

