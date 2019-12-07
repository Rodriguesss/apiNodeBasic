const Usuario = require('../models/Usuario');

exports.getPosts = async(req, res) => {
    try{
        let posts = await Usuario.findAll({});
        res.status(200).send({
            posts
        })
    }catch(e){
        res.status(500).send({messagem: 'Erro ao mostrar usuarios' + e})
    }
}

exports.getPostsOne = async(req, res) => {
    try{
        let id = req.params.id;
        let post = await Usuario.findOne({where: {id: id}});
        if(post != undefined){
            res.status(200).send({post});
        }else{
            res.status(500).send({messagem: 'Undefined'});
        }
        
    }catch(e){
        res.status(500).send({messagem: 'Erro ao encontrar post' + e})
    }
}

exports.deletePosts = async(req, res) => {
    try{
        let id = req.params.id;
        let post = await Usuario.findOne({where: {id: id}});
        res.status(200).send({messagem: 'Deletado com sucesso.'});
        return post.destroy();
    }catch(e){
        res.status(500).send({messagem: 'Erro ao deletar post' + e})
    }
}

exports.putPost = async(req, res) => {
    try{
        let id = req.params.id;
        let post = await Usuario.update(
            { 
                userId: req.body.userId,
                title: req.body.title,
                completed: req.body.completed }, 
                {
                    where: {id: id}
                });
    if(post != undefined){
        res.status(200).send({messagem: 'Alterado com sucesso'});
    }else{
        res.status(500).send({messagem: 'Undefined'});
    }
        
    }catch(e){
        res.status(500).send({messagem: 'Erro ao alterar post' + e})
    }
}

exports.postPosts = async(req, res) => {
    try{
        /*const postPosts = new Usuario({
            "userId": req.body.userId,
            "title": req.body.title,
            "completed": req.body.completed
        });

        console.log(postPosts);

        await postPosts.save();*/
        Usuario.create({
            userId: req.body.userId,
            title: req.body.title,
            completed: req.body.completed
        }).then( newPost => {
            res.status(200).send({newPost});
        })

        if(post != undefined){
            res.status(200).send({messagem: 'Cadastrado com sucesso'});
        }else{
            res.status(500).send({messagem: 'Undefined'});
        }

    }catch(e){
        res.status(500).send({messagem: 'Erro ao cadastrar dado' + e})
    }
}