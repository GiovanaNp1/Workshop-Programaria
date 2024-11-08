const client = require('../client')

module.exports = {
    async verify(req, res) {
        try {
            const resp = client.info();
            res.send(await resp);
        } catch (error) {
            console.error('Erro ao verificar o documento:', error);
        }
    },

    async index(req, res) {
        let searchResult = client.search({ index: req.originalUrl.substring(1), body: req.body });

        res.send(await searchResult)
    },

    async exists(req, res) {
        const exists = await client.exists({
            index: req.originalUrl.substring(1),
            id: 1
        })

        res.send(await exists)
    },

    async create(req, res) {
        try {
            const dataset = req.body;

            const result = await client.helpers.bulk({
                datasource: dataset,
                onDocument: (doc) => ({
                    index: { _index: req.originalUrl.substring(1) }
                }),
            });

            res.status(200).json({
                message: 'Documentos indexados com sucesso!',
                result,
            });
        } catch (error) {
            console.error('Erro ao indexar documentos:', error);
            res.status(500).json({ message: 'Erro ao indexar documentos', error });
        }
    },

    async delete(req, res) {
        try {
            console.log(req)
            const response = await client.delete({
                index: "receitas",
                id: req.params._id,
                type: '_doc'
            });
            res.status(200).json({
                message: 'Documento Deletado com sucesso',
            });
        } catch (error) {
            console.error('Erro ao deletar o documento:', error);
        }
    },

    async update(req, res) {
        try {
            const response = await client.update({
                index: 'receitas',
                id: req.params._id,
                body: { doc: req.body }
            });
            res.status(200).json({
                message: 'Documento atualizado:',
            });
        } catch (error) {
            console.error('Erro ao atualizar o documento:', error);
        }
    }
}