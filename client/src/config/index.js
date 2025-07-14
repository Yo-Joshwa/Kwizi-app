/**
 * @typedef {Object} IOption
 * @property {string} id
 * @property {string} text
 * @property {boolean} isCorrect
 */

/**
 * @typedef {Object} IQuestion
 * @property {string} id
 * @property {string} text
 * @property {string} [difficulty]
 * @property {IOption[]} options
 */

/**
 * @typedef {Object} IQuiz
 * @property {string} id
 * @property {string} title
 * @property {string} [description]
 * @property {string} [image]
 * @property {string} categoryId
 * @property {IQuestion[]} questions
 */

/**
 * @typedef {Object} ICategory
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} image
 * @property {IQuiz[]} quizzes
 */

/**
 * @typedef {Object} IResponse
 * @property {string} questionId
 * @property {string} optionId
 * @property {boolean} isCorrect
 */

/**
 * @typedef {Object} ICategoryStats
 * @property {number} attempts
 * @property {number | null} averageScore
 * @property {string} categoryId
 * @property {number} completed
 * @property {string} id
 * @property {Date} lastAttempt
 * @property {string} userId
 * @property {ICategory} category
 */
