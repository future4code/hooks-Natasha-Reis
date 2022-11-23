
CREATE TABLE IF NOT EXISTS Cookenu_users (
    id VARCHAR(64) PRIMARY KEY,
    name VARCHAR(64) NOT NULL,
    email VARCHAR(64) NOT NULL,
    password VARCHAR(64) NOT NULL
);

CREATE TABLE IF NOT EXISTS Cookenu_recipes (
    id VARCHAR(64) PRIMARY KEY,
    title VARCHAR(64) NOT NULL,
    created_at DATE,
    description VARCHAR(1024) DEFAULT "No description provided",
);

CREATE TABLE IF NOT EXISTS Cookenu_follower (
    user_id VARCHAR(64),
    follower_id VARCHAR(64),
    PRIMARY KEY (user_id, follower_id),
    FOREIGN KEY (user_id) REFERENCES Cookenu_users(id),
    FOREIGN KEY (follower_id) REFERENCES Cookenu_users(id),
);
