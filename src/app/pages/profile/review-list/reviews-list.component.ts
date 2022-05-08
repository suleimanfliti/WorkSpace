import { Component, OnInit } from '@angular/core';
import { UserSerivce } from 'src/app/shared/services/user.service';

@Component({
  selector: 'me-reviews-list',
  templateUrl: './reviews-list.component.html',
  styleUrls: ['./reviews-list.component.css'],
})
export class ReviewsListComponent implements OnInit {
  isLoaded: boolean = false;
  reviews: any[] = [];
  constructor(private userSerice: UserSerivce) {}
  reviewListData = [
    {
      name: 'Lillian Stone',
      img: 'assets/images/avatars/thumb-8.jpg',
      date: '28th Jul 2018',
      rating: 5,
      review:
        'The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.',
    },
    {
      name: 'Victor Terry',
      img: 'assets/images/avatars/thumb-9.jpg',
      date: '28th Jul 2018',
      rating: 4,
      review:
        'The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.',
    },
    {
      name: 'Wilma Young',
      img: 'assets/images/avatars/thumb-10.jpg',
      date: '28th Jul 2018',
      rating: 5,
      review:
        'The palatable sensation we lovingly refer to as The Cheeseburger has a distinguished and illustrious history. It was born from humble roots, only to rise to well-seasoned greatness.',
    },
  ];
  ngOnInit(): void {
    // this.userSerice.getReviewsList().subscribe((revRes) => {
    // })
  }
  delete(index: number) {
    console.log('delete commints');
  }
}
