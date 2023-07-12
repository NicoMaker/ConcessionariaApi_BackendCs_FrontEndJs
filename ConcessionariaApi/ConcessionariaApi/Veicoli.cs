namespace ConcessionariaApi;

public abstract class Veicoli
{
    public string Model
    {
        get;
        set;
    }
    public int Displacement
    {
        get;
        set;
    }

    public string Colour
    {
        get;
        set;
    }
    public int Seats
    {
        get;
        set;
    }

    public string Type
    {
        get { return GetType().Name; }
    }

    public abstract void PrintVeicolo();
}