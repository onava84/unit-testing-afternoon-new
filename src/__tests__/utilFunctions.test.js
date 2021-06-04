import {shortenText} from '../../src/utils/functions'
import {wordCount, attachUserName} from '../../server/utils'
import {shortText,longText, posts,users} from './__data__/testData'

test('shortenText should not alter a string with less than 100 characters', () => {
    expect(shortenText(shortText)).toHaveLength(29);
  });

test('shortenText should cut off extra characters after 100 and add three periods', () => {
    const shortened = shortenText(longText)
    expect(shortened.length).not.toBe(longText.length)
    console.log(shortened.length)
    expect(shortened.slice(-3)).toBe('...')
})

test('wordCount should correctly count the number of words in a sentence', () => {
    expect(wordCount(posts)).toBe(233);
})

test('attachUserName should remove any post with no matching user', () => {
    const newPosts = attachUserName(users, posts);
    const deletedPost = posts[5];
    expect(newPosts).not.toContainEqual(deletedPost);
  });