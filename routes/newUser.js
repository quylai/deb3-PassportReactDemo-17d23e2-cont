import models from '../models';
export default function (app) {
  app.post('/api/testUserSignup', (request, response) => {
    const body = request.body;
    models.User.create({
      username: body.username,
      password: body.password,
      email: body.email,
      first_name: body.first_name,
      last_name: body.first_name

    }).then(() => {
      response.send();

		}).catch((error) => { 
      console.log(error);     
    })
  });
}