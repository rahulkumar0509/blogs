import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AppService } from 'src/app/app.service';
import { Blog } from 'src/app/models/blog';

@Component({
  selector: 'app-personality-article',
  templateUrl: './personality-article.component.html',
  styleUrls: ['./personality-article.component.scss']
})
export class PersonalityArticleComponent implements OnInit {

  @Input() blog: Blog = <Blog> {};
  personalityForm: FormGroup;
  contentForm: FormGroup;
  header;

  constructor(private appService: AppService) { }

  ngOnInit(): void {
    this.header = {
      name: "World's Famous Personality",
      menu: ['recipes', 'stories', 'about']
    };
    this.blog = {
      title: "The story of Enzo Ferrari",
      image: "../assets/enzo-ferrari-modena-bio-bn.jpeg",
      brief: "Enzo Ferrari led an intense life, and spent it travelling from Modena to Maranello, Turin and Milan with a single goal in his mind: building racing cars.",
      multipleContents: true,
      content: [{
        title: "",
        description: "Heavy snow was falling in Modena on the 18th February 1898. It was so heavy that Mr. Alfredo Ferrari had to wait two days to register the birth of his second son, Enzo. The family lived in the house/workshop, which today houses the Museum  dedicated to the great constructor. His mother, Adalgisa Bisbini, and the firstborn, Alfredo, also lived there.",
      },{
        title: "",
        description: "Since childhood Enzo Ferrari has been passionate about cars: in 1908 he went to the races on the Bologna circuit with his father and brother. Both will not live past the First World War. However, Enzo will. After a Spanish flu epidemic, he was soon dismissed from the front and during the post-war time he set off for Turin to seek his fortune."
      }, {
        title: "",
        description: "He dreamed of working for FIAT, but since his application was rejected, he started working as tester at a small “Torpedo” company. His career as tester continued in Milan with Costruzioni Meccaniche Nazionali, until it blossomed into that of a racing driver. He debuted in 1919, in the uphill race from Parma to Poggio di Berceto. The following year his twent-year collaboration with Alfa Romeo began, first as official driver, then as director of the racing department."
      },{
        title: "",
        description: "In 1923, after the victory on the Savio circuit, he met the Baracca Counts, parents of aviator Francesco Baracca, who invited him to use their son’s coat of arms on his automobiles: a Prancing Horse. In 1929 Enzo Ferrari was knighted for his sporting merits and given the title of Commander. He founded the “Scuderia Ferrari” (Ferrari Racing Team), a sporting society to allow its own members to race, which in a short time became an affiliation of Alfa Romeo. His symbol is to be the Prancing Horse."
      }, {
        title: "",
        description: "In 1932 Ferrari, who had just become a father, permanently abandoned his career as racing driver and a few years later his association with Alfa Romeo also came to an end. However, he was about to begin a new adventure: Auto Avio Costruzioni, the ancestor of Ferrari, founded first in Modena in 1939 and moved to Maranello in 1943."
      }, {
        title: "",
        description: "After the inevitable difficulties caused by the war, the Prancing Horse carmaker was ready to create its dream cars, known as the “reds”. Ferrari soon debuted in races, F1 included, collected successes and its cars became synonymous with innovation and luxury handicraft. In 1963 Enzo Ferrari founded the “ Dino Ferrari” High School in Maranello, still active today, dedicated to the son who died prematurely and aimed to train young people in the motoring industry."
      }, {
        title: "",
        description: "A reserved and shy man, for his achievements Enzo Ferrari received other important titles and prizes, among which two honorary degrees (in engineering at the University of Bologna, and in physics at the University of Modena), the title of Knight of the Grand Cross, the Columbus prize and the Hammarskjöld prize for Social Sciences. The last project he took part in was the constitution of the Galleria Ferrari of Maranello: unfortunately, he passed away before the museum was completed. Enzo Ferrari died at the age of 90 on the 14th August 1988, one year and a half before the Galleria was inaugurated."
      }],
      conclusion: "",
      authorEmail: "",
      authorName: ""
    }
    // this.blog = this.appService.getScreenDataTransfer();
  }

}
