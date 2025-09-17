const ProductModel = require("../Model/product");

exports.getProduct = async (req, res) => {
    try {
        const data = await ProductModel.find();
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" })
    }
}
exports.postProduct = async (req, res) => {
    const { title, amount } = req.body;
    try {
        const newProduct = new ProductModel({ title, amount });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" })

    }

}
exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedProduct = await ProductModel.findByIdAndDelete(id);
        if (!deletedProduct) {
            res.status(404).json({ message: "product not found" })

        }
        res.status(200).json({ message: "sucessfully deleted" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "server error" })

    }
}
exports.updateProduct = async (req, res) => {
    const { title, amount } = req.body;
    const { id } = req.params.id;
    try {
        const updatedProduct = await ProductModel.findByIdAndUpdate(
            id,
            { title, amount },
            { new: true }

        )
        res.status(201).json({ updatedProduct, message: "successfully updated!" })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "server error" });
    }
}
