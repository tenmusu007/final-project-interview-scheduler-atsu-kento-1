DROP TABLE appointment;
CREATE TABLE appointment(id SERIAL PRIMARY KEY, time TEXT, day_id INTEGER REFERENCES day(day_id));
