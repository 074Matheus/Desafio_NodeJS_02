/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
	process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

/**
 * Server Activation
 */

app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);


	// CÓDIGO PARA ATENDER OS REQUERIMENTOS
	// R01, R02, R03, R04, R05

	let aluno01 = 'Caique silva'
	let nota1 = 21
	let peso1 = 60
	let altura1 = 1.70
	let imcAluno1 = peso1 / (altura1 * altura1)
	let dev1 = false


	let aluno02 = 'Caio sousa'
	let nota2 = 19
	let peso2 = 75
	let altura2 = 1.90
	let imcAluno2 = peso2 / (altura2 * altura2)
	let dev2 = false


	let aluno03 = 'João silva'
	let nota3 = 35
	let peso3 = 80
	let altura3 = 1.85
	let imcAluno3 = peso3 / (altura3 * altura3)
	let dev3 = true

	var soma = nota1 + nota2 + nota3

	console.log('A soma das idades é ', soma)
	const alunos = [aluno01, aluno02, aluno03]

	console.log('O nome dos alunos é')

	console.table(alunos)


	console.log('O imc do aluno1 é: ', imcAluno1)
	console.log('O imc do aluno2 é: ', imcAluno2)
	console.log('O imc do aluno3 é: ', imcAluno3)

	var media =  imcAluno1 + imcAluno2 + imcAluno3

	console.log('A media do imc dos ubuntus é:',media)

	

	console.log('O aluno dev é: ', aluno03, dev3)

	console.log('O aluno que possui sobrenome Silva é: ', aluno03)

	
});