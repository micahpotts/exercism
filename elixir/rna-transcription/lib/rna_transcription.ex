defmodule RnaTranscription do
  @doc """
  Transcribes a character list representing DNA nucleotides to RNA

  ## Examples

  iex> RnaTranscription.to_rna('ACTG')
  'UGAC'
  """
  def convert(single_char) do
    case single_char do
      ?G -> ?C
      ?C -> ?G
      ?T -> ?A
      ?A -> ?U
      _ -> nil
    end
  end

  @spec to_rna([char]) :: [char]
  def to_rna(dna) do
    List.foldr(dna, [], fn x, acc ->
      [convert(x) | acc]
    end)
  end
end
