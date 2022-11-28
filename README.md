#基于React开发的OrderFood
>>1.2022.11.27号在看完黑马的React（）以及李立超老师的React（）的一半而写（李立超老师的案例）；<br><br>
>2.在跟着视频敲的过程中，发现黑马的视频较老，以及学长的建议别用class组件，因此全用函数组件，并了解了React脚手架中为了样式隔离有name.module.css来防止重名污染；<br><br>
>3.在函数组件中通过const[name，setname]来存储以及更新状态。<br><br>
>4.之前在看黑马视频时了解到了context但没有去敲，这个案例中了解到了context的用法（  <br>const name = React.creatcontext <br>usecontext（name）<br> <组件名.Provider value={{}}/> ）<br><br>
>5.真正体会到了React的组件化的好处，需要数据时通过props和contect进行传递数据，修改时只需要修改单独组件，而且样式相同或者相差不大的组件可以直接复用。<br><br>
>6.将不同的React组件放在不同的分类中，UI中放一些UI组件，assets中放一些静态资源（练习时将img们放在index.html中），store文件夹中放context等等。<br><br>
>7.写的途中遇到了一点小问题，感谢一位热心网友远程帮我看（App.js中的filterHandler），即实现搜索框的过滤作用时，onchange事件一触发我直接在展示的数据的基础上过滤数据，肯定无法展示数据，在帮助下判断过滤后的数组中有无数据再决定展示给用户，并在过程中接触到了防抖，感谢！<br><br>
>8.并复习到了一些css样式设计，学到了z-index，::before/::after，overflow，做重要的是了解到了ant-design组件库，并且当设置某个组件的svg属性时，在调试中找到svg的父级类名<br>
:global(.anticon-account-book svg){<br>
    width: 100rem;<br>
    height: 75rem;<br>
    fill: white;<br>
}<br>
如上.anticon-account-book为在调试工具中所找，在解决这个问题中了解到了类名哈希化，：global为了防止影响到其他样式<br><br>
>9. onClick={e => e.stopPropagation()} 阻止事件冒泡
>10.暂时这些，以后回来充实案例再来Readme
