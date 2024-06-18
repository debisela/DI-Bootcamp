CREATE TABLE FirstTab (
     id integer, 
     name VARCHAR(10)
)

INSERT INTO FirstTab VALUES
(5,'Pawan'),
(6,'Sharlee'),
(7,'Krish'),
(NULL,'Avtaar')

SELECT * FROM FirstTab

CREATE TABLE SecondTab (
    id integer 
)

INSERT INTO SecondTab VALUES
(5),
(NULL)


SELECT * FROM SecondTab

/*
Q1. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NULL )
answer: SELECT id FROM SecondTab WHERE id IS NULL -> gives id = null
expect 3 but answer is 0, because null cannot be compared to other values
	


Q2. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id = 5 )

answer: expect 3 but answer is 2, because the null id in FirstTab is not counted, since it cannot be compared to 5, so only the rows with 6 and 7 are counted.



Q3. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab )
answer: expect 2 but answer is 0, because again we are trying to compare to a null value which is not possible


Q4. What will be the OUTPUT of the following statement?

    SELECT COUNT(*) 
    FROM FirstTab AS ft WHERE ft.id NOT IN ( SELECT id FROM SecondTab WHERE id IS NOT NULL )

answer: same as question2 -> 2
