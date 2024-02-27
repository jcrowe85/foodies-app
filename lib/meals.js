import sql from 'better-sqlite3'

const db = sql('meals.db');

export async function getMeals() {
    // await new Promise((resolve) => setTimeout(resolve, 4000))
    return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
    return db.prepare('SELECT * FROM meals Where slug = ?').get(slug);
}