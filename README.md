
Build a simple RESTful API to provide the following operations to the app:
● GET /cakes
● GET /cakes/{id}
● POST /cakes
● PUT /cakes/{id}
● DELETE /cakes/{id}
A cake payload is in the form of: {
id: <number>,
name: <string>, comment: <string>, imageUrl: <string>, yumFactor: <number>
}
Guidance
● The app must be maintained within a source controlled repo
● Any framework can be used on front / back
● The app should be responsive across mobile/desktop browsers
● The imageUrl can just be a plain text field (no image picking is required)
● The inclusion of Progressive Web App features is encouraged
● Validation criteria:
● Name: Required
● Comment: Required, min length 5, max length 200
● ImageUrl: Required
● YumFactor: Required
● Ensure cakes are unique by name. I.E cannot add a cake with a name
that matches a previously added cake