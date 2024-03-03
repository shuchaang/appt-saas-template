CREATE TABLE IF NOT EXISTS `account_base_info` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `account_name` VARCHAR(50) NOT NULL,
  `pwd` VARCHAR(50) NOT NULL,
  `email` VARCHAR(255) NOT NULL,
  `account_status` INT NOT NULL,
  `is_delete` TINYINT(1) NOT NULL,
  `create_time` timestamp not null default now(),
  `update_time` timestamp not null default now()
);
CREATE TABLE IF NOT EXISTS `account_token_info` (
  `id` INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  `account_id` INT NOT NULL,
  `access_token` VARCHAR(255) NOT NULL,
  `refresh_token` VARCHAR(255) NOT NULL,
  `expires_at` INT NOT NULL,
  `device_type` INT NOT NULL,
  `create_time` timestamp not null default now(),
  `update_time` timestamp not null default now()
);
INSERT INTO `account_base_info` (`account_name`, `pwd`, `email`, `account_tatus`, `is_delete`) VALUES
('sc', '123', '674137092@qq.com', 1, 0),
('user2', 'password2', 'user2@example.com', 1, 0),
('user3', 'password3', 'user3@example.com', 1, 0),
('user4', 'password4', 'user4@example.com', 1, 0),
('user5', 'password5', 'user5@example.com', 1, 0),
('user6', 'password6', 'user6@example.com', 1, 0),
('user7', 'password7', 'user7@example.com', 1, 0),
('user8', 'password8', 'user8@example.com', 1, 0),
('user9', 'password9', 'user9@example.com', 1, 0),
('user10', 'password10', 'user10@example.com', 1, 0);