import { GithubService } from '../../services/github/github.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Component({
	moduleId: module.id,
	selector: 'profile',
	templateUrl: 'profile.component.html'
})

export class ProfileComponent implements OnInit {
	private user = [];
	private repos = [];
	constructor(private _githubService:GithubService) {
		this._githubService.getUser().subscribe(user => {
			//console.log(user);
			this.user = user;
		});
		this._githubService.getRepos().subscribe(repos => {
			//console.log(repos);
			this.repos = repos;
		})
	}
	ngOnInit() { }

}