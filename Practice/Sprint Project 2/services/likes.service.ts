

export async function insertLike(bookId: string, userId: string) {
  if (isNaN(Number(bookId))) {
    throw new TypeError('bookId should be able to be casted to a number');
  }
}

export async function deleteLike(bookId: string, userId: string) {
  if (isNaN(Number(bookId))) {
    throw new TypeError('bookId should be able to be casted to a number');
  }
}