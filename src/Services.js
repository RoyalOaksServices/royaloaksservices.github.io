export const generalServices = [{
    price: 15,
    title: 'Basic: For children that need minimal support',
    descriptors: [
        "24hr Supervision",
        "Preparing meals for the child (Provided by parent)",
        "Playing games, both educational and non-educational ",
        "Helping the child out with little things, such as homework ",
        "Prompt the child to do his/her chores (if parents desire)",
        "Walk to community areas, such as parks, or just around the neighborhood",
        { title: "No physical management", descriptors: [
            "If the child starts to display behaviors, you’ll have to pay the matching level price or terminate services."
        ]} 
    ]
},
{
    price: 20,
    title: 'Intermediate: For children that need some additional support',
    descriptors: [
        "Everything included in Basic",
        "Working towards behavior reduction/creating a behavior plan",
        "No physical management, except for self-injurious behaviors (Ages 3-12)",
        "No physical management, except for self-injurious behaviors and physical aggression behaviors (Ages 13+)"
    ]
},
{
    price: 25,
    title: 'Advanced: For children that need extra support',
    descriptors: [
        "Everything included in Basic, except for walks, which will be case specific",
        "Behavior Intervention Plan",
        "Physical management, as needed, and as a last resort"
    ]
}]

export const addOns = [{
    price: 2,
    title: 'Meal Preparation',
    descriptors: [
        "Helping children develop the skills necessary to independently prepare their own meals",
        "Helping children develop the skills needed to independently use kitchen electronics (e.g., microwave)",
        "Will work around the parents/guardian’s comfortability",
        "Examples of Meals: bowl of cereal, eggs, sandwiches, mac & cheese/microwavable meals, etc."
    ]
},
{
    price: 2,
    title: 'Hygiene Routines',
    descriptors: [
        "Helping children develop the skills needed to independently complete hygiene tasks",
        "Creating a hygiene routine (if requested)",
        "Potential Hygiene tasks: brushing teeth, flossing, shaving, washing hands, etc."
    ]
},
{
    price: 1,
    title: 'Social Skills',
    descriptors: [
        "Helping children develop social skills such as sharing, taking turns, and sportsmanship",
        "Creating fun ways for children to learn the importance of social skills."
    ]
},
{
    price: 2,
    title: 'Academic',
    descriptors: [
        "Helping children develop helpful study skills needed to increase overall performance in a specific academic area.",
        "Helping children develop skills needed to be successful in a school setting (e.g., waiting)",
    ]
}]