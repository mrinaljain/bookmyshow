export const renderTemplate = (req, res) => {
  const data = {
    title: "EJS Tags",
    seconds: new Date().getSeconds(),
    items: ["apple", "banana", "cherry"],
    htmlContet: "<em>This is some em Text</em>",
  };

  //   res.render("template.ejs", { data });
  res.render("form.ejs");
};

export const submitForm = (req, res) => {
  console.log(req.body);
  const { firstName, lastName } = req.body;
  const length = firstName.length + lastName.length;
  res.render("form.ejs", {
    length: length,
  });
};
