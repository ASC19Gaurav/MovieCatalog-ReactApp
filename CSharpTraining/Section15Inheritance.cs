

namespace Domain
{
    public class Section15Inheritance
    {
        public class Pizza
        {
            private List<Ingredient> ingredients = new List<Ingredient>();

            public void AddIngredient(Ingredient ingredient)
            {
                ingredients.Add(ingredient);
            }

            // runtime polymorphism
            public override string ToString()
            {
                return "Number of ingredients in this pizza is " + ingredients.Count;
            }
        }

        public abstract class Ingredient
        {
            // virtual method has a default implementation in the base class declaring it
            // abstract method does not have an implementation in the base class declaring it

            // virtual method
            // public virtual string Prepare()
            // {
            //    return "I am an ingredient";
            // }

            // abstract method
            public abstract string Prepare();

            // Virtual properties (fields cannot be virtual - properties and methods can be virtual)
            public virtual string Name { get; set; } = "Some ingredient";

            public override string ToString() => "Name of ingredient : " + Name;
        }

        // Tomato is a concrete implementation of `Ingredient`
        // If we did not override `Prepare()`, `Tomato` would be abstract as well
        public /*abstract*/ class Tomato : Ingredient
        {
            // Since `Tomato` is a concrete `Ingredient`, we must tell how it is prepared
            public override string Prepare()
            {
                return "Chop whole tomato in 1 inch squares";
            }

            public override string Name { get; set; } = "Tomato";

            public override string ToString() => base.ToString() + ". I am a cherry tomato.";
        }

        public class Cheese : Ingredient
        {
            public override string Prepare()
            {
                return "Shred into thin slices";
            }

            public override string Name { get; set; } = "Cheese";
        }


    }
}
