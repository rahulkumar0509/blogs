import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-food-article',
  templateUrl: './food-article.component.html',
  styleUrls: ['./food-article.component.scss']
})
export class FoodArticleComponent implements OnInit {

  blogContent;
  header;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.header = {
      name: "delhi's famous kulchas",
      menu: ['recipes', 'stories', 'about'],
      size: 'medium'
    };
    // this.blogContent = {
    //   title: "Cilantro Lime Rice",
    //   type: "food",
    //   subType: "vegetarian",
    //   authorName: "rahul kumar",
    //   authorEmail: "rahul@food.com",
    //   tags: ['mexican-food', 'veg'],
    //   slogan: "If you’re a rice lover, you’ll want to make this recipe, stat.",
    //   posted: "Posted on August 8, 2022 by Rahul",
    //   image: "foodiesfeed.com_berries-smoothie-bowl.jpg",
    //   brief: {
    //     title: " If you’re anything like me, you love cilantro lime rice. Along with tasting amazing on its own, it goes with everything and is a great side dish",
    //     introduction: " If you’ve ever had the Chipotle cilantro lime rice, you know how addictive it is. It can go inburritos, in bowls, or on a combination plate. The best part about this recipe is that it comes together so easily. It’s definitely perfect for a weeknight dinner or meal prep. I think of cilantro lime rice as the bright, tart, refreshing cousin to arroz rojo or tomato tinged Mexican rice. If you’re a rice lover, you’ll want to make this recipe, stat."
    //   },
    //   content: [
    //     {
    //       title: "What is cilantro lime rice?",
    //       type: "text",
    //       description: "Cilantro lime rice is fluffy long grain rice with cilantro and lime. It sounds simple, but like all delicious and good recipes, the dish is so much more than the parts. Cilantro lime rice is fresh and bright, fluffy, and full of herby cilantro flavor. It goes especially well with Mexican food and surprisingly great with Asian food too!"
    //     },
    //     {
    //       title: "What is cilantro lime rice?",
    //       type: "text",
    //       description: "Cilantro lime rice is fluffy long grain rice with cilantro and lime. It sounds simple, but like all delicious and good recipes, the dish is so much more than the parts. Cilantro lime rice is fresh and bright, fluffy, and full of herby cilantro flavor. It goes especially well with Mexican food and surprisingly great with Asian food too!"
    //     },
    //     {
    //       title: "What is cilantro lime rice?",
    //       type: "text",
    //       description: "Cilantro lime rice is fluffy long grain rice with cilantro and lime. It sounds simple, but like all delicious and good recipes, the dish is so much more than the parts. Cilantro lime rice is fresh and bright, fluffy, and full of herby cilantro flavor. It goes especially well with Mexican food and surprisingly great with Asian food too!"
    //     },
    //     {
    //       title: "What is cilantro lime rice?",
    //       type: "ol",
    //       description: [
    //         "rice: classic long grain white rice is what is best – it’s fluffy and loose. You can get American long grain white rice, Jasmine, or basmati. I prefer American long grain white rice for this dish. More on rice choice below.",
    //         "neutral oil or butter: we’re going to toast the grains of rice to make them taste slightly nutty and even morelike rice. You can use butter for a slightly richer taste or a neutral oil.",
    //         "rice: classic long grain white rice is what is best – it’s fluffy and loose. You can get American long grain white rice, Jasmine, or basmati. I prefer American long grain white rice for this dish. More on rice choice below.",
    //         "rice: classic long grain white rice is what is best – it’s fluffy and loose. You can get American long grain white rice, Jasmine, or basmati. I prefer American long grain white rice for this dish. More on rice choice below.",
    //         "rice: classic long grain white rice is what is best – it’s fluffy and loose. You can get American long grain white rice, Jasmine, or basmati. I prefer American long grain white rice for this dish. More on rice choice below."
    //       ],
    //       introduction: "Classic long grain white rice is what is best – it’s fluffy and loose. You can get American long grain white rice, Jasmine, or basmati. I prefer American long grain white rice for this dish. More on rice choice below."
    //     },
    //     {
    //       title: "What is cilantro lime rice?",
    //       type: "ul",
    //       description: [
    //         "rice: classic long grain white rice is what is best - it's fluffy and loose. You can get American long grain white rice, Jasmine, or basmati. I prefer American long grain white rice for this dish. More on rice choice below.",
    //         "neutral oil or butter: we’re going to toast the grains of rice to make them taste slightly nutty and even morelike rice. You can use butter for a slightly richer taste or a neutral oil.",
    //         "rice: classic long grain white rice is what is best - it's fluffy and loose. You can get American long grain white rice, Jasmine, or basmati. I prefer American long grain white rice for this dish. More on rice choice below.",
    //         "rice: classic long grain white rice is what is best - it's fluffy and loose. You can get American long grain white rice, Jasmine, or basmati. I prefer American long grain white rice for this dish. More on rice choice below.",
    //         "rice: classic long grain white rice is what is best - it's fluffy and loose. You can get American long grain white rice, Jasmine, or basmati. I prefer American long grain white rice for this dish. More on rice choice below."
    //       ]
    //     }
    //   ],
    //   conclusion: "hewre is the conclusion"
    // }
    this.blogContent = JSON.parse(localStorage.getItem('currentBlog'));
    console.log(this.blogContent);
  }

}
