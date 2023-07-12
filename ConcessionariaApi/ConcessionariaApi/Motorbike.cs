namespace ConcessionariaApi;

public class Motorbike : Veicoli
{
    public override void PrintVeicolo() =>
        Console.WriteLine($"modello : {Model} , tipo : {Type} , cilindrata : {Displacement} , colore {Colour} , posti a sedere : {Seats}");
}