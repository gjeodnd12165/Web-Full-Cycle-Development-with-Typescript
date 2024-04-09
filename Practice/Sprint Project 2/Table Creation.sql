CREATE TABLE `users` (
  `id` ineteger PRIMARY KEY,
  `email` varchar(255),
  `username` varchar(255),
  `password` varchar(255)
);

CREATE TABLE `books` (
  `id` integer PRIMARY KEY,
  `title` varchar(255),
  `category_id` integer,
  `format` varchar(255),
  `author` varchar(255),
  `ISBN` varchar(255),
  `pages` integer,
  `summary` varchar(255),
  `detail` varchar(255),
  `contents` varchar(255),
  `price` integer
);

CREATE TABLE `category` (
  `id` integer PRIMARY KEY,
  `name` varchar(255)
);

CREATE TABLE `likes` (
  `user_id` integer,
  `book_id` integer
);

CREATE TABLE `cartItems` (
  `id` integer PRIMARY KEY,
  `book_id` integer,
  `count` integer
);

CREATE TABLE `deliveries` (
  `id` integer PRIMARY KEY,
  `address` varchar(255),
  `reciever` varchar(255),
  `contact` varchar(255)
);

CREATE TABLE `orders` (
  `id` integer PRIMARY KEY,
  `delivery_id` integer,
  `created_at` timestamp
);

CREATE TABLE `orderedBooks` (
  `order_id` integer,
  `book_id` integer,
  `count` integer
);

ALTER TABLE `likes` ADD FOREIGN KEY (`user_id`) REFERENCES `users` (`id`);

ALTER TABLE `likes` ADD FOREIGN KEY (`book_id`) REFERENCES `books` (`id`);

ALTER TABLE `cartItems` ADD FOREIGN KEY (`id`) REFERENCES `books` (`id`);

ALTER TABLE `orders` ADD FOREIGN KEY (`delivery_id`) REFERENCES `deliveries` (`id`);

ALTER TABLE `orderedBooks` ADD FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`);

ALTER TABLE `orderedBooks` ADD FOREIGN KEY (`book_id`) REFERENCES `cartItems` (`book_id`);

ALTER TABLE `books` ADD FOREIGN KEY (`category_id`) REFERENCES `category` (`id`);
