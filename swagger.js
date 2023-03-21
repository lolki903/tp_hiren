/* SWAGGER ADMIN*/

/**
 * @swagger
 * /admin:
 *   post:
 *     summary: Login admin.
 *     description: Crée une nouvelle table de restaurant avec un nom donné.
 *     parameters:
 *       - in: body
 *         name: pincode
 *         description: Le nom de la nouvelle table de restaurant.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *              pincode:
 *                  type: number
 *     responses:
 *       200:
 *         description: Login admin avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: login admin.
 *                   example: 1
 *       500:
 *         description: Erreur de serveur lors de la création de la nouvelle table de restaurant.
 */

/* SWAGGER USER */
/**
 * @swagger
 * paths:
 *  /user:
 *  get:
 *      description: Get all users
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *             description: Erreur de serveur lors de la récupération des users
 */

/**
 * @swagger
 * paths:
 *  /user/{id}:
 *    get:
 *      description: Get user by id
 *      parameters:
 *         - in: path
 *           name: id
 *           type: integer
 *           required: true
 *           description: id of the user
 *      responses:
 *         '200':
 *            description: A successful response
 *         '500':
 *           description: Erreur de serveur lors de la récupération du user
 *         '404':
 *           description: User non trouvé
 */

/**
 * @swagger
 * /user:
 *   post:
 *     summary: Créer un user.
 *     description: Crée un nouveau user.
 *     parameters:
 *       - in: body
 *         name: user
 *         description: Les informations du user.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *             firstname:
 *               type: string
 *             lastname:
 *               type: string
 *             status:
 *               type: string
 *             active:
 *               type: boolean
 *     responses:
 *       200:
 *         description: ID du nouveau user créé avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID du nouveau user.
 *                   example: 1
 *       500:
 *         description: Erreur de serveur lors de la création du nouveau user.
 */
/**
 * @swagger
 * paths:
 *  /user/delete/{id}:
 *      put:
 *       summary: Mettre à jour une table de restaurant
 *       description: Mettre à jour une table de restaurant
 *       parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *          description: id de la table de restaurant
 *       responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: Erreur de serveur lors de la mise à jour de la table de restaurant
 *          '404':
 *             description: Table de restaurant non trouvée
 */

/* SWAGGER TIPS PAYMENT */

/**
 * @swagger
 * paths:
 *  /tipspayment:
 *   post:
 *    summary: Créer un tips payment
 *    parameters:
 *     - name: id_user
 *       in: body
 *       description: ID de l'utilisateur
 *       required: true
 *       schema:
 *          type: object
 *          properties:
 *             id_user:
 *              type: integer
 *              description: ID de l'utilisateur
 *              example: 1
 *             amount:
 *                type: integer
 *                description: Montant du tips
 *                example: 10
 * 
 *    responses:
 *     '200':
 *         description: ID du tips payment créé avec succès
 */

/**
 * @swagger
 * paths:
 *  /tipspayment/{id}:
 *      get:
 *        description: Get tips payment by id
 *        parameters:
 *          - in: path
 *            name: id
 *            type: integer
 *            required: true
 *            description: id of the tips payment
 *        responses:
 *         '200':
 *           description: A successful response
 * 
 */

/**
 * @swagger
 * paths:
 *  /tipspayment:
 *   get:
 *    summary: Tout les pourboires versés
 *    description: Récupère tout les pourboires versés
 *    responses:
 *     '200':
 *      description: A successful response
 */

/**
 * @swagger
 * paths:
 *  /tipspayment/{id}:
 *   put:
 *      summary: Mettre à jour un tips payment
 *  
 */

/**
 * @swagger
 * paths:
 *  /tipspayment/{id}:
 *    delete:
 *      description: Get user by id
 *      parameters:
 *         - in: path
 *           name: id
 *           type: integer
 *           required: true
 *           description: id of the user
 *      responses:
 *         '200':
 *            description: Suppression
 *         '500':
 *           description: Erreur de serveur lors de la récupération du user
 *         '404':
 *           description: User non trouvé
 */

/* SWAGGER RESTAURANT_TABLE */


/**
 * @swagger
 * paths:
 *  /restauranttable:
 *   get:
 *    summary: Tout les noms des tables
 *    description: Récupère tout les noms des tables
 *    responses:
 *     '200':
 *      description: A successful response
 */

/**
 * @swagger
 * /restauranttable:
 *   post:
 *     summary: Créer une nouvelle table de restaurant.
 *     description: Crée une nouvelle table de restaurant avec un nom donné.
 *     parameters:
 *       - in: body
 *         name: name
 *         description: Le nom de la nouvelle table de restaurant.
 *         required: true
 *         schema:
 *           type: object
 *           properties:
 *              name:
 *                  type: string
 *     responses:
 *       200:
 *         description: ID de la nouvelle table de restaurant créée avec succès.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: integer
 *                   description: ID de la nouvelle table de restaurant.
 *                   example: 1
 *       500:
 *         description: Erreur de serveur lors de la création de la nouvelle table de restaurant.
 */

/**
 * @swagger
 * paths:
 *  /restauranttable/{id}:
 *      put:
 *       summary: Mettre à jour une table de restaurant
 *       description: Mettre à jour une table de restaurant
 *       parameters:
 *        - in: path
 *          name: id
 *          type: integer
 *          required: true
 *          description: id de la table de restaurant
 *        - in: body
 *          name: name
 *          description: Le nom de la table de restaurant.
 *          required: true
 *          schema:
 *           type: object   
 *           properties:
 *            name:
 *              type: string
 *              description: Le nom de la table de restaurant.
 *              example: "Table du dev"
 *       responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: Erreur de serveur lors de la mise à jour de la table de restaurant
 *          '404':
 *             description: Table de restaurant non trouvée
 */

/* SWAGGER STATS */

/**
 * @swagger
 * paths:
 *  /stat:
 *   get:
 *    summary: Tout les pourboires versés
 *    description: Récupère tout les pourboires versés
 *    responses:
 *     '200':
 *          description: A successful response
 *     '500':
 *          description: Erreur de serveur lors de la récupération des pourboires
 *     '404':
 *         description: Aucun pourboire trouvé
 */

/**
 * @swagger
 * paths:
 *  /statuser/{id}:
 *    get:
 *      summary: Total pourboire d'un user
 *      description: Total pourboire d'un user
 *      parameters:
 *         - in: path
 *           name: id
 *           type: integer
 *           required: true
 *           description: id of the user
 *      responses:
 *         '200':
 *            description: Suppression
 *         '500':
 *           description: Erreur de serveur lors de la récupération du user
 *         '404':
 *           description: User non trouvé
 */

/**
 * @swagger
 * paths:
 *  /statmonth/{id}:
 *    get:
 *      summary: Total pourboire gagne sur le mois
 *      description: Total pourboire d'un user
 *      parameters:
 *         - in: path
 *           name: id
 *           type: integer
 *           required: true
 *           description: numero du mois
 *           example: '01'
 *      responses:
 *         '200':
 *           description: Stats du mois récupérées avec succès
 *         '500':
 *           description: Erreur de serveur lors de la récupération du user
 *         '404':
 *           description: User non trouvé
 */