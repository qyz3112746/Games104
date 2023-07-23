# Games104
每个branch记录一个games104的作业

# Games104 homework 2

This is an achievement of HW2 in games104 task1 and task2 by changing the file of color-grading fragment shader.

Color grading off

 ![image](https://user-images.githubusercontent.com/84280032/215300486-53e8f765-eaeb-4c1e-8724-6bbdf2aa7241.png)
 
Color grading on

"color_grading_map": "asset/texture/lut/color_grading_lut_01.png"
 ![image](https://user-images.githubusercontent.com/84280032/215300489-dfee8cb5-a24b-4743-90eb-b9580ec9d041.png)

"color_grading_map": "asset/texture/lut/color_grading_lut_02.png",
![image](https://user-images.githubusercontent.com/84280032/215300498-fb4051a0-d5b4-49f2-a225-2f07b163b6c0.png)

"color_grading_map": "asset/texture/lut/color_grading_LUT.jpg",
![image](https://user-images.githubusercontent.com/84280032/215300504-58114f73-d2f7-4a79-aef7-bf518315aa07.png)

# Games104 homework 03

几个小注意点：
防止跳起后卡在墙内，在判断碰撞的时候将物体的碰撞稍微前移一些。
按照作业的状态机连接效果不佳，把idle的is_moving判断直接连接walk_run状态效果更好。

实现视频：https://www.bilibili.com/video/BV17G4y1M7un/

# Games104 HW4

在motor中添加了 起跳初始速度属性 当这个属性不为零时以这个速度作为起跳初始速度，否则按照设定的起跳最大高度来计算初始速度。

效果视频：https://www.bilibili.com/video/BV1px4y1E79U/
