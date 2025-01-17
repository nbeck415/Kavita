import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Member } from '../_models/member';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  baseUrl = environment.apiUrl;

  constructor(private httpClient: HttpClient) { }

  getMembers() {
    return this.httpClient.get<Member[]>(this.baseUrl + 'users');
  }

  getMemberNames() {
    return this.httpClient.get<string[]>(this.baseUrl + 'users/names');
  }

  adminExists() {
    return this.httpClient.get<boolean>(this.baseUrl + 'admin/exists');
  }

  deleteMember(username: string) {
    return this.httpClient.delete(this.baseUrl + 'users/delete-user?username=' + encodeURIComponent(username));
  }

  hasLibraryAccess(libraryId: number) {
    return this.httpClient.get<boolean>(this.baseUrl + 'users/has-library-access?libraryId=' + libraryId);
  }

  hasReadingProgress(librayId: number) {
    return this.httpClient.get<boolean>(this.baseUrl + 'users/has-reading-progress?libraryId=' + librayId);
  }


  getPendingInvites() {
    return this.httpClient.get<Array<Member>>(this.baseUrl + 'users/pending');
  }
}
