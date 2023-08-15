import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RecipesList from './RecipesList';
import RecipeDetail from './RecipeDetail';
import Header from './Header';
import About from './About';
import Footer from './Footer';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const recipes = [
    {
      id: uuidv4(),
      title: 'Traditional Biltong🥓',
      shortDescription: 'This is probably South Africa’s most popular and best known snack.',
      ingredients: [
        '12.5 kg beef or venison (sirloin, rump or fillet)',
        '560 g salt (finely ground)',
        '125 ml brown sugar',
        '25 ml bicarbonate of soda',
        '12.5 ml freshly ground pepper',
        '125 ml ground coriander',
        '250 ml brown vinegar',
        '2.5 l warm water',
      ],
      preparationSteps: [
        'Prepare the biltong mixture...',
        'Trim excess fat from the meat and cut it into thin strips.',
        'In a large bowl, combine the biltong spices, salt, and sugar.',
        'Add the meat strips to the spice mixture, ensuring they are well coated. Cover and refrigerate for 2 hours.',
        'Remove the meat from the refrigerator and let it come to room temperature.',
        'Preheat your food dehydrator or oven to a low temperature (around 150°F or 65°C).',
        'Thread the marinated meat strips onto biltong hooks or skewers.',
        'If using an oven, place the skewers on the oven racks, leaving space between them for air circulation.',
        'If using a dehydrator, arrange the skewers on the trays, again allowing space between them.',
        'Let the biltong dry for several hours, checking periodically for desired texture. Thicker pieces may take longer.',
        'Once dried, remove the biltong from the dehydrator or oven and let it cool completely.',
        'Store the cooled biltong in an airtight container at room temperature.',
      ],
      pictureUrl: "https://biltongandnuthut.co.za/wp-content/uploads/2021/02/4-1.jpg",
    },
    {
      id: uuidv4(),
      title: 'Sautéed Chicken Livers with Caramelized Onions and Herbs🥘',
      shortDescription: 'A rich and flavorful dish featuring tender chicken livers.',
      ingredients: [
        '500g chicken livers, cleaned and trimmed',
        '2 large onions, thinly sliced',
        '3 cloves garlic, minced',
        '2 tablespoons butter',
        '2 tablespoons olive oil',
        'Salt and pepper, to taste',
        '1 teaspoon dried thyme',
        '1 teaspoon dried rosemary',
        '2 tablespoons fresh parsley, chopped',
        '2 tablespoons brandy or cognac (optional)',
      ],
      preparationSteps: [
        'Heat a large skillet over medium-high heat and add 1 tablespoon of butter and 1 tablespoon of olive oil.',
        'Add the sliced onions to the skillet and cook, stirring occasionally, until caramelized and golden brown. This may take about 20-25 minutes. Transfer the onions to a plate and set aside.',
        'In the same skillet, add the remaining butter and olive oil.',
        'Add the cleaned and trimmed chicken livers to the skillet. Sauté for about 3-4 minutes on each side until they are browned on the outside and slightly pink on the inside.',
        'Add the minced garlic, dried thyme, and dried rosemary to the skillet. Sauté for an additional 1-2 minutes until fragrant.',
        'If using brandy or cognac, carefully add it to the skillet and let it simmer for a minute to deglaze the pan.',
        'Season the chicken livers with salt and pepper to taste.',
        'Return the caramelized onions to the skillet and toss to combine with the chicken livers.',
        'Sprinkle the chopped fresh parsley over the dish before serving.',
        'Serve the sautéed chicken livers over toasted bread or alongside a fresh green salad.',
      ],
      pictureUrl: "https://www.licious.in/blog/wp-content/uploads/2020/09/liver.jpg", // Provide a URL to an image of the dish
    },

    {
      id: uuidv4(),
      title: 'Homemade Chakalaka🍅🌶',
      shortDescription: 'A spicy and flavorful South African vegetable relish.',
      ingredients: [
        '2 tablespoons vegetable oil',
        '1 large onion, finely chopped',
        '2-3 cloves garlic, minced',
        '1-2 hot chili peppers, finely chopped (adjust to taste)',
        '1 red bell pepper, diced',
        '1 yellow bell pepper, diced',
        '2 carrots, grated',
        '1 can (400g) baked beans in tomato sauce',
        '1 can (400g) diced tomatoes',
        '1 teaspoon curry powder',
        '1 teaspoon ground cumin',
        '1 teaspoon paprika',
        'Salt and black pepper, to taste',
        '1 tablespoon sugar (optional)',
        '2 tablespoons chutney (apricot or peach), to taste',
        'Fresh cilantro or parsley, chopped, for garnish',
      ],
      preparationSteps: [
        'Heat the vegetable oil in a large pot over medium heat.',
        'Add the chopped onion and sauté until translucent and softened.',
        'Stir in the minced garlic and chopped chili peppers, and cook for another minute until fragrant.',
        'Add the diced red and yellow bell peppers, and grated carrots. Sauté for a few minutes until the vegetables start to soften.',
        'Sprinkle the curry powder, ground cumin, and paprika over the vegetables. Stir well to coat the vegetables with the spices.',
        'Pour in the canned baked beans and diced tomatoes (with their juices). Stir to combine all the ingredients.',
        'Season with salt and black pepper to taste. If you prefer a slightly sweet chakalaka, add a tablespoon of sugar at this stage.',
        'Reduce the heat to low, cover the pot, and let the chakalaka simmer for about 20-25 minutes, stirring occasionally.',
        'Taste and adjust the seasoning as needed. If desired, stir in chutney to add a touch of sweetness and tanginess.',
        'Remove from heat and let the chakalaka cool slightly before serving.',
        'Garnish with chopped fresh cilantro or parsley before serving.',
        'Serve the chakalaka warm as a side dish with grilled meat, bread, or pap (maize porridge).',
      ],
      pictureUrl: "https://africanbites.com/wp-content/uploads/2014/11/IMG_4999.jpg", // Provide a URL to an image of the dish
    },
    {
      id: uuidv4(),
      title: 'Bobotie🍲',
      shortDescription: 'A classic South African dish with spiced minced meat and an egg-based topping.',
      ingredients: [
        '1 kg ground beef or lamb',
        '2 slices of white bread',
        '1 cup milk',
        '2 onions, finely chopped',
        '2 cloves garlic, minced',
        '2 tablespoons curry powder',
        '1 teaspoon ground turmeric',
        '1 teaspoon ground coriander',
        '1 teaspoon ground cumin',
        '1 teaspoon ground cinnamon',
        '1 teaspoon sugar',
        'Salt and pepper, to taste',
        '3 eggs',
        '1/4 cup chutney (apricot or peach)',
        '1/4 cup almond flakes (optional)',
        'Bay leaves, for garnish',
      ],
      preparationSteps: [
        'Preheat the oven to 350°F (175°C).',
        'Soak the slices of bread in the milk until softened.',
        'In a large pan, sauté the chopped onions until translucent.',
        'Add the minced garlic and ground meat. Cook until the meat is browned.',
        'Stir in the curry powder, turmeric, coriander, cumin, cinnamon, sugar, salt, and pepper. Cook for a few minutes until fragrant.',
        'Squeeze the excess milk from the soaked bread and crumble it into the meat mixture. Mix well.',
        'In a separate bowl, lightly beat 2 of the eggs and add them to the meat mixture. Mix until combined.',
        'Transfer the meat mixture to a baking dish and smooth the top.',
        'In a small bowl, beat the remaining egg and chutney together. Pour this mixture over the top of the meat.',
        'If using almond flakes, sprinkle them over the top.',
        'Place a few bay leaves on top of the dish for garnish.',
        'Bake in the preheated oven for about 40-45 minutes, or until the topping is set and golden brown.',
        'Remove from the oven and let it cool slightly before serving.',
        'Serve the bobotie with yellow rice and a side of sambal (tomato and onion salad).',
      ],
      pictureUrl: "https://tasteoftheplace.com/wp-content/uploads/2017/05/Bobotie-at-TasteOfThePlace.com-inline.jpg", // Provide a URL to an image of the dish
    },
    {
      id: uuidv4(),
      title: 'Bread and Butter Pudding🍞🧈',
      shortDescription: 'A comforting dessert made with layers of buttered bread and a rich custard mixture.',
      ingredients: [
        '6-8 slices of day-old bread, crusts removed',
        'Butter, softened, for spreading',
        '1/2 cup raisins or sultanas',
        '4 large eggs',
        '1/2 cup granulated sugar',
        '2 cups milk',
        '1 teaspoon vanilla extract',
        '1/2 teaspoon ground cinnamon',
        'Pinch of nutmeg',
        '2 tablespoons demerara sugar (optional, for topping)',
        'Whipped cream or custard, for serving',
      ],
      preparationSteps: [
        'Preheat the oven to 350°F (175°C). Grease a baking dish.',
        'Butter each slice of bread and cut them into triangles or halves.',
        'Arrange half of the bread slices in the greased baking dish, slightly overlapping them.',
        'Sprinkle raisins or sultanas over the bread layer.',
        'Arrange the remaining bread slices over the raisins to create another layer.',
        'In a bowl, whisk together eggs, granulated sugar, milk, vanilla extract, ground cinnamon, and nutmeg.',
        'Pour the custard mixture evenly over the bread layers, ensuring all the bread is soaked.',
        'Press down gently on the bread to help it absorb the custard.',
        'Let the pudding sit for about 15-20 minutes to allow the bread to fully absorb the custard.',
        'If desired, sprinkle demerara sugar over the top of the pudding for a crispy topping.',
        'Bake in the preheated oven for 30-40 minutes or until the pudding is set and the top is golden brown.',
        'Remove from the oven and let it cool slightly before serving.',
        'Serve the bread and butter pudding warm with whipped cream or custard.',
      ],
      pictureUrl: "https://d3lp4xedbqa8a5.cloudfront.net/s3/digital-cougar-assets/food/2014/12/01/AustralianTableBR112200/bread-and-butter-pudding.jpg?width=1200&height=630&quality=75&mode=crop", // Provide a URL to an image of the dish
    },
    {
      id: uuidv4(),
      title: 'Koeksisters🥨',
      shortDescription: 'A sweet and syrupy South African treat made from twisted dough.',
      ingredients: [
        'For the dough:',
        '500g cake flour',
        '10g instant yeast',
        'Pinch of salt',
        '60g butter, softened',
        '250ml milk',
        '1 large egg',
        'For the syrup:',
        '750g sugar',
        '500ml water',
        '1 cinnamon stick',
        '2-3 cloves',
        '1/2 teaspoon ground ginger',
        '1/2 teaspoon cream of tartar',
        '1 teaspoon lemon juice',
      ],
      preparationSteps: [
        'In a large bowl, mix the flour, instant yeast, and salt.',
        'Add the softened butter, milk, and egg. Mix to form a soft dough.',
        'Knead the dough on a floured surface until smooth and elastic. Cover and let it rest for 15-20 minutes.',
        'Roll out the dough to about 5mm thickness.',
        'Cut the dough into strips about 7-10cm long and 1.5-2cm wide.',
        'Twist each strip into a braid-like shape, pressing the ends to seal.',
        'Heat oil in a deep pot or fryer to 170-180°C.',
        'Fry the koeksisters in batches until golden brown and crispy, about 2-3 minutes per side.',
        'Remove the koeksisters from the oil and drain them on paper towels.',
        'In a separate pot, combine sugar, water, cinnamon stick, cloves, ground ginger, cream of tartar, and lemon juice to make the syrup.',
        'Bring the syrup to a boil, then reduce the heat and let it simmer for about 15 minutes.',
        'Allow the syrup to cool slightly, then place the fried koeksisters into the warm syrup.',
        'Let the koeksisters soak in the syrup for a few hours or overnight, turning them occasionally to ensure they are fully coated.',
        'Remove the koeksisters from the syrup and let them drain on a wire rack.',
        'Serve the koeksisters at room temperature as a sweet and indulgent treat.',
      ],
      pictureUrl: "https://www.okfoods.co.za/living/recipes/traditional-cape-malay-koeksisters/_jcr_content/root/responsivegrid/responsivegrid/responsivegrid_745810992/image.coreimg.80.900.png/1678792187354/koesisters-649x354.png", // Provide a URL to an image of the dish
    },
    {
      id: uuidv4(),
      title: 'Milktart🍰',
      shortDescription: 'A creamy and comforting South African custard pie with a hint of cinnamon.',
      ingredients: [
        'For the crust:',
        '250g all-purpose flour',
        '125g butter, cold and cubed',
        'Pinch of salt',
        'Ice water, as needed',
        'For the filling:',
        '4 cups milk',
        '1 cinnamon stick',
        '1 teaspoon vanilla extract',
        '2/3 cup granulated sugar',
        '3 large eggs',
        '1/4 cup cornstarch',
        '2 tablespoons all-purpose flour',
        'Pinch of salt',
        'Ground cinnamon, for dusting',
      ],
      preparationSteps: [
        'For the crust:',
        'In a bowl, mix the flour and salt. Add the cold, cubed butter and use your fingers to rub it into the flour until the mixture resembles coarse crumbs.',
        'Gradually add ice water and mix until the dough comes together. Form the dough into a ball, wrap it in plastic wrap, and refrigerate for 30 minutes.',
        'Roll out the chilled dough on a floured surface and fit it into a pie dish. Trim any excess dough and prick the bottom with a fork. Refrigerate while preparing the filling.',
        'For the filling:',
        'In a saucepan, heat the milk and cinnamon stick until it just starts to boil. Remove from heat, cover, and let it steep for about 15 minutes. Then remove the cinnamon stick.',
        'In a bowl, whisk together the eggs, granulated sugar, cornstarch, flour, and salt until well combined.',
        'Gradually whisk the warm milk into the egg mixture. Return the mixture to the saucepan.',
        'Cook the mixture over medium heat, stirring constantly, until it thickens and coats the back of a spoon.',
        'Remove from heat and stir in the vanilla extract.',
        'Pour the custard filling into the prepared pie crust.',
        'Dust the top of the custard with ground cinnamon.',
        'Bake in a preheated oven at 350°F (175°C) for about 25-30 minutes, or until the custard is set and the crust is golden brown.',
        'Let the milktart cool completely before slicing and serving.',
        'Serve the milktart at room temperature or chilled.',
      ],
      pictureUrl: "https://www.africanbites.com/wp-content/uploads/2014/11/IMG_0869-1.jpg", // Provide a URL to an image of the dish
    },
    {
      id: uuidv4(),
      title: 'Malva Pudding🍯',
      shortDescription: 'A sweet and sticky South African dessert served warm with creamy sauce.',
      ingredients: [
        'For the pudding:',
        '1 cup all-purpose flour',
        '1 cup granulated sugar',
        '1 teaspoon baking soda',
        '1/4 teaspoon salt',
        '1 large egg',
        '1 tablespoon smooth apricot jam',
        '1 teaspoon vinegar',
        '1 cup milk',
        '1 tablespoon melted butter',
        'For the sauce:',
        '1 cup heavy cream',
        '1/2 cup butter',
        '1 cup granulated sugar',
        '1/2 cup boiling water',
        '1 teaspoon vanilla extract',
      ],
      preparationSteps: [
        'Preheat the oven to 350°F (175°C). Grease a baking dish.',
        'In a bowl, mix the flour, granulated sugar, baking soda, and salt.',
        'In a separate bowl, whisk together the egg, apricot jam, vinegar, milk, and melted butter.',
        'Add the wet ingredients to the dry ingredients and mix until smooth.',
        'Pour the batter into the greased baking dish.',
        'Bake for about 25-30 minutes, or until the pudding is cooked through and golden brown on top.',
        'While the pudding is baking, prepare the sauce. In a saucepan, combine the cream, butter, granulated sugar, boiling water, and vanilla extract. Bring to a simmer and cook until the sugar has dissolved and the sauce has thickened slightly.',
        'As soon as the pudding comes out of the oven, poke holes all over the top using a skewer.',
        'Pour the hot sauce evenly over the pudding, allowing it to soak in.',
        'Let the malva pudding stand for a few minutes to absorb the sauce before serving.',
        'Serve the malva pudding warm, drizzled with extra sauce if desired.',
      ],
      pictureUrl: "https://www.amawaterways.co.uk/Assets/Connections/Thumb/Malva_Pudding_Hero.jpg", // Provide a URL to an image of the dish
    },
    {
      id: uuidv4(),
      title: 'Peppermint Crisp Tart🥮☘',
      shortDescription: 'A beloved South African dessert featuring layers of biscuits, caramel, cream, and Peppermint Crisp chocolate.',
      ingredients: [
        '1 packet (200g) Tennis biscuits or similar plain tea biscuits',
        '1 can (385g) caramel treat (caramelized condensed milk)',
        '2 cups whipping cream',
        '1 teaspoon vanilla extract',
        '2-3 Peppermint Crisp chocolate bars, grated',
        'Chocolate shavings, for garnish',
      ],
      preparationSteps: [
        'In a mixing bowl, whip the whipping cream until soft peaks form. Stir in the vanilla extract.',
        'Layer the bottom of a rectangular or square dish with a single layer of biscuits.',
        'Spread a thin layer of caramel treat over the biscuits.',
        'Spread a layer of whipped cream over the caramel.',
        'Sprinkle a generous amount of grated Peppermint Crisp chocolate over the cream layer.',
        'Repeat the layers: biscuits, caramel, whipped cream, and Peppermint Crisp chocolate. Continue until you run out of ingredients, finishing with a layer of whipped cream on top.',
        'Garnish with additional grated Peppermint Crisp chocolate and chocolate shavings.',
        'Cover the dish with plastic wrap and refrigerate for a few hours or overnight to allow the flavors to meld and the dessert to set.',
        'Slice and serve the Peppermint Crisp Tart chilled.',
      ],
      pictureUrl: "https://www.foodleclub.com/wp-content/uploads/2021/08/peppermint-crisp-fridge-tart_4.jpg", //  a URL to an image of the dish
    },
    // ... other recipes ...
  
  ];

    
  



  

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<RecipesList recipes={recipes} />} />
        <Route path="/recipe/:id" element={<RecipeDetail recipes={recipes} />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;








