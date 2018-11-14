#MongoDB by Ubuntu

- Install
	- https://docs.mongodb.com/manual/tutorial/install-mongodb-on-ubuntu/

- Console MongoDB
	>Para iniciar MongoDB
		-$mongo

- Listando bancos
	>show dbs

- Criando/Entrando no banco
	>use exemplo

- Criando Tabela/Inserindo dados
	>db.exemplo.save({name: 'Name', date: '00-00-0000'})
- Listando Tabelas
	>show collections
- Pesquisando dados
	>db.exemplo.find()
	>db.exemplo.find({name : 'Name'})	(Busca por id)
	>db.exemplo.find().pretty()    (Melhor visualização)
	>db.getCollectionNames()

- Deletando dados
	>db.dropDatabase()
	>db.exemplo.remove({name: 'Name'})
- Update Informação
	>db.exemplo.update({name: 'Name'}, {$set:{name: 'New Name'})




- Docs MongoDB/Manual
	>https://docs.mongodb.com/manual/reference/command/
