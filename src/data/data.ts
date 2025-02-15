import { fetchChatResponse } from '../api/api'

export const russianRequest = 'Ответь на русском. '
export const clearSymbols =
	'Без символов меняющих текст. Например: "*", "**", "", "\n" и т.д. '
export const task = await fetchChatResponse(
	clearSymbols + 'один вопрос по героям dota2 или предметам где возможны минимум три правильных ответа без начального объяснения и не давая ответа на вопрос'
)
