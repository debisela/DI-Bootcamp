--Get a list of all the languages, from the language table.

select name from language

--Get a list of all films joined with their languages – select the following details : film title, description, and language name.
select film.title, film.description, language.name as language
from film
inner join language
on film.language_id = language.language_id

--Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
select film.title, film.description, language.name as language
from film
right join language
on film.language_id = language.language_id

--Create a new table called new_film with the following columns : id, name. Add some new films to the table.
create table new_film(
	new_film_id serial primary key,
	new_film_name varchar(100)
)	
insert into new_film(new_film_name)
	values('Forrest Gump'),('Cinderella'),('Titanic')

select * from new_film 

/*Create a new table called customer_review, which will contain film reviews that customers will make.
Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
It should have the following columns:
review_id – a primary key, non null, auto-increment.
film_id – references the new_film table. The film that is being reviewed.
language_id – references the language table. What language the review is in.
title – the title of the review.
score – the rating of the review (1-10).
review_text – the text of the review. No limit on the length.
last_update – when the review was last updated.*/

create table customer_review (
	review_id serial primary key,
	title varchar(100),
	score integer CHECK (score >= 1 AND score <= 10),
	review_text text,
	last_update date,
	film_id integer,
	constraint fk_new_film
	foreign key (film_id)
	references new_film(new_film_id)
	on delete cascade,
	language_id	integer,
	constraint fk_language
	foreign key (language_id)
	references language(language_id)
);


	
--Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
insert into customer_review(title,score,review_text,last_update,film_id,language_id)
	values ('Forrest Gump',9, 'very good movie','2024-06-19',(select new_film_id from new_film where new_film_name = 'Forrest Gump'),(select language_id from language where name = 'English'))

insert into customer_review(title,score,review_text,last_update,film_id,language_id)
	values ('Cinderella',4, 'not so good','2024-05-20',(select new_film_id from new_film where new_film_name = 'Cinderella'),(select language_id from language where name = 'English'))

select * from customer_review
	
--Delete a film that has a review from the new_film table, what happens to the customer_review table?
	--the customer_review row of that film should be deleted, since we chose cascade on delete
delete from new_film where new_film_name = 'Cinderella' 




