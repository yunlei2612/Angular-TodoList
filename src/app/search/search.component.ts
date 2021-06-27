import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    public keyword: string;
    public historyList: any[] = [];
    constructor() { }

    ngOnInit(): void {
    }

    doAdd() {
        this.historyList.push({
            title: this.keyword,
            status: 0
        });
        
        this.keyword = '';
    }


    /**
     * 用于删除所选项
     * @method deleteHistory
     * @param {number} key 选择删除项的下标
     */
    deleteHistory(key) {
        this.historyList.splice(key, 1);
        console.log(key);
    }
}
