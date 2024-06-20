--Use UPDATE to change the language of some films. Make sure that you use valid languages.
select * from language

update language
	set name = 'Spanish'
	where name = 'Japanese'

update language
	set name = 'Hebrew'
	where name = 'Mandarin'

--Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
--store_id and address_id. we can only insert into customer table store_id and address_id that are present in the store and address table.

--We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
select * from customer_review
drop table customer_review
select * from new_film

--Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

select count(*) from rental where return_date is null

--Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

select film.title
from film
inner join inventory
on film.film_id = inventory.film_id
inner join rental
on inventory.inventory_id = rental.inventory_id
inner join payment
on rental.rental_id = payment.rental_id
where rental.return_date is null
order by payment.amount desc
limit 30

--Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
--The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

--The 2nd film : A short documentary (less than 1 hour long), rated “R”.

--The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

--The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
--select * from film

select film.title, film.description
from film
inner join film_actor
on film.film_id = film_actor.film_id
inner join actor
on film_actor.actor_id = actor.actor_id
where actor.first_name = 'Penelope' and actor.last_name = 'Monroe' and film.description ilike '%sumo wrestler%'

select film.title
from film
inner join film_category
on film.film_id = film_category.film_id
inner join category
on category.category_id = film_category.category_id
where film.length < 60 and film.rating = 'R' and category.name = 'Documentary'

select film.title, customer.first_name, customer.last_name, payment.amount, rental.return_date 
from film
inner join inventory
on film.film_id = inventory.film_id
inner join rental
on rental.inventory_id = inventory.inventory_id
inner join customer
on customer.customer_id = rental.customer_id
inner join payment
on rental.rental_id = payment.rental_id
where customer.first_name = 'Matthew' and customer.last_name = 'Mahan' and payment.amount > 4 and rental.return_date between '2005-07-28' and '2005-08-01' 

select film.title, film.description, film.replacement_cost
from film
inner join inventory
on film.film_id = inventory.film_id
inner join rental
on rental.inventory_id = inventory.inventory_id
inner join customer
on customer.customer_id = rental.customer_id
where customer.first_name = 'Matthew' 
and customer.last_name = 'Mahan' 
and (film.title ilike '%boat' or film.description ilike '%boat')
