import { Component } from '@angular/core'
import { FormHelper, UiComment } from '@kikstart/ui'

@Component({
  templateUrl: './comment-custom.component.html',
})
export class CommentCustomComponent {
  public comment: UiComment = {
    path: '/posts/1',
    text: 'Hi there, I am beeman and I love coding! ',
    created: new Date('Sat, 04 Jan 2020 00:41:30 GMT'),
    author: {
      avatar: 'https://github.com/beeman.png',
      name: 'beeman 🐝',
      username: '@beeman',
      path: '/profiles/@beeman',
    },
  }

  public fields = [
    FormHelper.input('author.name', { label: 'Author Name', required: true }),
    FormHelper.input('author.username', { label: 'Author Username', required: true }),
    FormHelper.input('author.avatar', { label: 'Author avatar', required: true }),
    FormHelper.input('author.path', { label: 'Author path', required: true }),
    FormHelper.input('path', { label: 'path', required: true }),
    FormHelper.input('created', { label: 'time', required: true }),
    FormHelper.input('text', { label: 'text', required: true }),
  ]
}
