import classes from './not-found.module.css';

export default function MealNotFound() {
    return (
        <main className={classes.main}>
            <h1>
                Meal Cannot Be Found!
            </h1>
            <p>
                Unfortunately, we could not find the requested page or meal date.
            </p>
        </main>
    )
}